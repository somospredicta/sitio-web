import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProtocolSelector from './ProtocolSelector';
import QuestionScreen from './QuestionScreen';
import CalculatingScreen from './CalculatingScreen';
import ResultPartial from './ResultPartial';
import LeadForm from './LeadForm';
import ResultFull from './ResultFull';
import { PROTOCOLS, calculateIVP } from './testData';
import { createAutodiagnosticLead } from '@/services/api';

// Stages: 1=selector, 2=questions, 3=calculating, 4=result+form, 5=submitting, 6=full result
export default function TestSection() {
    const [stage, setStage] = useState(1);
    const [selectedProtocol, setSelectedProtocol] = useState(null);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);
    const [leadData, setLeadData] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleProtocolContinue = () => setStage(2);

    const handleQuestionsComplete = (ans) => {
        setAnswers(ans);
        setStage(3);
    };

    const handleCalculationDone = useCallback(() => {
        const res = calculateIVP(selectedProtocol, answers);
        setResult(res);
        setStage(4);
    }, [selectedProtocol, answers]);

    const handleFormSubmit = async (formData) => {
        setIsSubmitting(true);
        setLeadData(formData);

        try {
            await createAutodiagnosticLead({
                ...formData,
                protocol: selectedProtocol,
                ivp_score: result.ivpScore,
                variable_scores: result.variableScores,
                answers: answers,
                knockouts_count: result.knockouts.length,
            });
        } catch (err) {
            console.error('Error al guardar lead autodiagnóstico:', err);
        }

        setIsSubmitting(false);
        setStage(6);
    };

    const handleRestart = () => {
        setStage(1);
        setSelectedProtocol(null);
        setAnswers({});
        setResult(null);
        setLeadData(null);
        // Scroll to test section
        const el = document.querySelector('#test');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="test" className="bg-secondary py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                {stage === 1 && (
                    <ProtocolSelector
                        selected={selectedProtocol}
                        onSelect={setSelectedProtocol}
                        onContinue={handleProtocolContinue}
                    />
                )}

                {stage === 2 && selectedProtocol && (
                    <QuestionScreen
                        questions={PROTOCOLS[selectedProtocol].questions}
                        subtitle={PROTOCOLS[selectedProtocol].subtitle}
                        onComplete={handleQuestionsComplete}
                    />
                )}

                <AnimatePresence>
                    {stage === 3 && (
                        <CalculatingScreen onDone={handleCalculationDone} />
                    )}
                </AnimatePresence>

                {stage === 4 && result && (
                    <div className="space-y-12">
                        <ResultPartial result={result} protocol={selectedProtocol} />
                        <div className="border-t border-border pt-10">
                            <LeadForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />
                        </div>
                    </div>
                )}

                {stage === 6 && result && leadData && (
                    <ResultFull
                        result={result}
                        protocol={selectedProtocol}
                        leadData={leadData}
                        onRestart={handleRestart}
                    />
                )}
            </div>
        </section>
    );
}