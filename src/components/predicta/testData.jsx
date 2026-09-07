export const PROTOCOLS = {
    MEP: {
        name: "Modelo de Expansión Predicta",
        short: "MEP",
        icon: "Globe",
        tagline: "Expansión a nuevo mercado",
        subtitle: "¿Qué tan preparado estás para esta expansión?",
        description: "Quiero entrar a un mercado nuevo y no sé si el entorno político y regulatorio me va a acompañar.",
        cardDescription: "¿Querés entrar a un nuevo mercado? Medimos si el entorno político e institucional del destino está listo para recibirte.",
        weights: { I4: 0.30, CAGE: 0.20, I1: 0.15, I2: 0.15, I5: 0.20 },
        variables: ["I1", "I2", "I4", "I5", "CAGE"],
        questions: [
            { id: "P1", variable: "I4", criticality: "critical", knockout: true, question: "¿Carecés de un relevamiento de información sobre el mercado destino: oferta local, precios de referencia o comportamiento del consumidor?", help: "Conocer el mercado de destino es el punto de partida de cualquier estrategia de expansión." },
            { id: "P2", variable: "CAGE", criticality: "relevant", knockout: false, question: "¿Desconocés si tu producto o servicio requiere adaptaciones para ese mercado: idioma, normas técnicas, gustos o formatos locales?", help: "La adaptación al mercado local puede ser determinante para la aceptación del producto." },
            { id: "P3", variable: "I2", criticality: "critical", knockout: false, question: "¿Carecés de un contacto, representante o potencial socio identificado en el mercado destino?", help: "Contar con un aliado local reduce significativamente los riesgos de entrada." },
            { id: "P4", variable: "I2", criticality: "relevant", knockout: false, question: "¿Carecés de contacto formal previo con cámaras, importadores o distribuidores del mercado destino?", help: "Los canales de distribución y representación son clave para operar en un mercado nuevo." },
            { id: "P5", variable: "I4", criticality: "critical", knockout: false, question: "¿Carecés de asesoramiento jurídico o aduanero específico para operar en ese mercado?", help: "El soporte legal y aduanero evita errores costosos en el proceso de entrada." },
            { id: "P6", variable: "I1", criticality: "relevant", knockout: false, question: "¿Carecés de claridad sobre qué documentación o habilitaciones necesitás para ingresar con tu producto al destino?", help: "Conocer los requisitos formales antes de avanzar ahorra tiempo y costos." },
            { id: "P7", variable: "I4", criticality: "critical", knockout: false, question: "¿Carecés de una definición clara sobre cómo vas a ingresar al mercado destino: exportación directa, representante local, filial o licencia?", help: "La elección del modelo de entrada determina la estructura de costos y riesgos de la operación." },
            { id: "P8", variable: "CAGE", criticality: "relevant", knockout: false, question: "¿Carecés de una cotización de los costos logísticos reales para llegar al mercado destino?", help: "Los costos logísticos impactan directamente en la competitividad del precio final." },
            { id: "P9", variable: "I5", criticality: "critical", knockout: true, question: "¿Carecés de una estimación de costos totales y precio de venta posible para el mercado destino?", help: "Sin una estimación financiera no es posible evaluar la viabilidad de la expansión." },
            { id: "P10", variable: "I5", criticality: "relevant", knockout: false, question: "¿Carecés de una fuente de financiamiento identificada para cubrir los costos de esta expansión?", help: "Identificar el financiamiento disponible es esencial antes de comprometer recursos." },
        ]
    },
    IRR: {
        name: "Resiliencia Regulatoria",
        short: "IRR",
        icon: "FileCheck",
        tagline: "Cambio normativo o regulatorio",
        subtitle: "¿Qué tan preparado estás para este cambio normativo?",
        description: "Una nueva ley o regulación afecta mi negocio y no sé cómo responder.",
        cardDescription: "¿Una nueva ley afecta tu negocio? Cuantificamos tu capacidad de absorber el cambio normativo sin perder viabilidad.",
        weights: { I3: 0.40, I1: 0.20, I4: 0.20, I2: 0.10, I5: 0.10 },
        variables: ["I1", "I2", "I3", "I4", "I5"],
        questions: [
            { id: "P1", variable: "I1", criticality: "critical", knockout: true, question: "¿Carecés de una lectura completa del texto de la norma, decreto o resolución que te afecta?", help: "Conocer el texto exacto de la norma es el primer paso para diseñar una respuesta efectiva." },
            { id: "P2", variable: "I1", criticality: "relevant", knockout: false, question: "¿Carecés de claridad sobre cuándo entra en vigencia la norma y cuál es el plazo exacto de adecuación?", help: "El tiempo disponible para adaptarse es un factor crítico en la planificación de la respuesta." },
            { id: "P3", variable: "I2", criticality: "relevant", knockout: false, question: "¿Carecés de representación en alguna cámara o asociación sectorial que esté negociando la implementación de esta norma?", help: "Participar en espacios sectoriales genera acceso a información anticipada y canales de influencia." },
            { id: "P4", variable: "I2", criticality: "accessory", knockout: false, question: "¿Carecés de información sobre cómo están respondiendo otros actores del sector ante esta norma?", help: "El aprendizaje de pares reduce el costo y el tiempo de adecuación normativa." },
            { id: "P5", variable: "I4", criticality: "critical", knockout: false, question: "¿Carecés de asesor jurídico o consultor especialista en este marco regulatorio?", help: "El soporte técnico especializado es clave para navegar cambios normativos complejos." },
            { id: "P6", variable: "I4", criticality: "relevant", knockout: false, question: "¿Carecés de un análisis de alternativas legales de cumplimiento que reduzcan el costo de adaptación?", help: "Explorar alternativas de cumplimiento puede reducir significativamente el impacto financiero." },
            { id: "P7", variable: "I3", criticality: "critical", knockout: false, question: "¿Carecés de un plan documentado con las acciones concretas para adaptar tu operación a la nueva norma?", help: "Un plan de adecuación claro reduce la exposición al riesgo de incumplimiento." },
            { id: "P8", variable: "I3", criticality: "relevant", knockout: false, question: "¿Carecés de un mapa de los procesos, productos o áreas de tu empresa que requieren cambios concretos por esta norma?", help: "Identificar los puntos de impacto es esencial para priorizar las acciones de adecuación." },
            { id: "P9", variable: "I5", criticality: "critical", knockout: true, question: "¿Carecés de una estimación del costo económico total de adaptarte a esta norma?", help: "Sin una estimación del costo no es posible evaluar la viabilidad del cumplimiento." },
            { id: "P10", variable: "I5", criticality: "critical", knockout: true, question: "¿Carecés de un análisis del impacto del costo de cumplimiento sobre la rentabilidad o continuidad de tu negocio?", help: "Evaluar el impacto en la rentabilidad define si la norma representa un riesgo de continuidad operativa." },
        ]
    },
    IGS: {
        name: "Gestión de Stakeholders",
        short: "IGS",
        icon: "Users",
        tagline: "Ecosistema de actores",
        subtitle: "¿Conocés el ecosistema de actores que incide en tu negocio?",
        description: "Toda decisión empresarial ocurre en un entorno de actores con intereses propios. Medimos si conocés quién te representa, quién puede obstaculizarte, qué hacen tus competidores y dónde está parado el Estado respecto a tu actividad.",
        cardDescription: "¿Conocés a los actores que inciden en tu sector? Mapeamos representación, oposición, competencia y posición del Estado frente a tu actividad.",
        weights: { I2: 0.45, I4: 0.20, I1: 0.15, I3: 0.10, I5: 0.10 },
        variables: ["I1", "I2", "I3", "I4", "I5"],
        questions: [
            { id: "P1", variable: "I2", criticality: "relevant", knockout: false, question: "¿Carecés de representación activa en cámaras, asociaciones o gremios que puedan intervenir frente a conflictos que afecten a empresas de tu sector?", help: "La representación institucional es la primera línea de defensa ante cambios en las reglas de juego." },
            { id: "P2", variable: "I2", criticality: "relevant", knockout: false, question: "¿Desconocés si las entidades que te representan tienen incidencia real ante los organismos que regulan o afectan tu actividad?", help: "No toda representación tiene la misma capacidad de influencia sobre los reguladores." },
            { id: "P3", variable: "I4", criticality: "critical", knockout: false, question: "¿Carecés de un mapeo de los actores —organizaciones sociales, sindicatos, grupos de presión— que podrían oponerse u obstaculizar tu operación?", help: "Identificar a los actores con poder de afectación permite anticipar riesgos antes de que escalen." },
            { id: "P4", variable: "I4", criticality: "relevant", knockout: false, question: "¿Desconocés los antecedentes de estos actores con otras empresas del sector en situaciones similares a la tuya?", help: "El comportamiento pasado de los actores es el mejor predictor de su conducta futura." },
            { id: "P5", variable: "I4", criticality: "relevant", knockout: false, question: "¿Carecés de información actualizada sobre las estrategias o movimientos recientes de tus principales competidores?", help: "La inteligencia competitiva permite anticipar cambios en el mercado y ajustar tu estrategia." },
            { id: "P6", variable: "I2", criticality: "relevant", knockout: false, question: "¿Desconocés si algún competidor tiene vínculos o ventajas con actores institucionales relevantes para tu sector?", help: "Las asimetrías en el acceso institucional pueden traducirse en ventajas competitivas difíciles de igualar." },
            { id: "P7", variable: "I3", criticality: "critical", knockout: false, question: "¿Carecés de claridad sobre qué organismos del Estado tienen jurisdicción directa sobre tu actividad o la decisión que estás evaluando?", help: "Conocer la arquitectura institucional que regula tu sector es el punto de partida para gestionarla." },
            { id: "P8", variable: "I3", criticality: "relevant", knockout: false, question: "¿Desconocés la posición actual del gobierno local o nacional respecto a tu sector o a la decisión que estás tomando?", help: "La postura del gobierno puede definir las condiciones de viabilidad de tu decisión." },
            { id: "P9", variable: "I5", criticality: "critical", knockout: false, question: "¿Carecés de una estimación del impacto operativo que tendría un conflicto activo con alguno de estos actores sobre tu negocio?", help: "Dimensionar el impacto potencial permite priorizar la gestión preventiva de los actores más relevantes." },
            { id: "P10", variable: "I1", criticality: "relevant", knockout: false, question: "¿Carecés de un plan o estrategia para relacionarte proactivamente con los actores clave que inciden en tu negocio?", help: "La gestión proactiva del ecosistema de actores reduce la exposición a conflictos futuros." },
        ]
    },
    IVC: {
        name: "Viabilidad de Inversión de Capital",
        short: "IVC",
        icon: "BarChart3",
        tagline: "Decisión de inversión",
        subtitle: "¿Qué tan preparado estás para tomar esta decisión de inversión?",
        description: "Estoy evaluando una inversión importante y quiero saber si el entorno garantiza las condiciones para una inversión viable.",
        cardDescription: "Analizamos si el entorno garantiza las condiciones para una inversión viable.",
        weights: { I5: 0.35, I4: 0.25, I3: 0.20, I1: 0.10, I2: 0.10 },
        variables: ["I1", "I2", "I3", "I4", "I5"],
        questions: [
            { id: "P1", variable: "I2", criticality: "relevant", knockout: false, question: "¿Carecés de información actualizada sobre el contexto del sector —demanda, competencia, tendencias— que justifique esta inversión?", help: "El contexto sectorial es el marco de referencia para evaluar la oportunidad de inversión." },
            { id: "P2", variable: "I4", criticality: "relevant", knockout: false, question: "¿Carecés de un análisis comparativo de distintas opciones de inversión antes de optar por esta?", help: "Evaluar alternativas garantiza que la decisión tomada sea la más adecuada para los objetivos de la empresa." },
            { id: "P3", variable: "I5", criticality: "critical", knockout: true, question: "¿Carecés de un esquema de financiamiento definido para esta inversión —capital propio, crédito o socio estratégico?", help: "Sin un esquema de financiamiento definido la inversión no puede concretarse." },
            { id: "P4", variable: "I1", criticality: "relevant", knockout: false, question: "¿Carecés de una revisión del marco contractual o legal que rige este producto o proyecto en el mercado de destino?", help: "El marco legal del activo define los riesgos jurídicos de la inversión." },
            { id: "P5", variable: "I4", criticality: "relevant", knockout: false, question: "¿Carecés de una valuación o estimación técnica independiente del activo o proyecto?", help: "La valuación independiente protege contra el riesgo de sobrepago." },
            { id: "P6", variable: "I5", criticality: "critical", knockout: true, question: "¿Carecés de un modelo que contemple al menos tres escenarios: optimista, base y pesimista?", help: "Un modelo con múltiples escenarios es la base para tomar decisiones de inversión con respaldo." },
            { id: "P7", variable: "I4", criticality: "critical", knockout: false, question: "¿Carecés de un cálculo del período de recupero de la inversión y la rentabilidad proyectada?", help: "El período de recupero en relación con la incertidumbre del entorno es un factor clave de viabilidad." },
            { id: "P8", variable: "I3", criticality: "relevant", knockout: false, question: "¿Carecés de una estrategia de salida definida en caso de que las condiciones cambien en los próximos 24 meses?", help: "Definir la estrategia de salida reduce la exposición ante escenarios adversos." },
        ]
    }
};

export const VARIABLE_NAMES = {
    I1: "Entorno Normativo",
    I2: "Actores y Stakeholders",
    I3: "Calidad Institucional",
    I4: "Inteligencia y Preparación",
    I5: "Viabilidad Financiera",
    CAGE: "Distancia Estructural (CAGE)"
};

export const VARIABLE_WARNINGS = {
    I1: "La normativa o el contexto regulatorio puede complicar tu decisión.",
    I2: "Hay actores con intereses que podrían oponerse a tu decisión.",
    I3: "Las instituciones del entorno presentan señales de arbitrariedad o debilidad.",
    I4: "Tu nivel de información e inteligencia del entorno es insuficiente para avanzar.",
    I5: "La viabilidad financiera del proyecto presenta riesgos relevantes.",
    CAGE: "La distancia estructural con el mercado destino es una barrera significativa."
};

export const CRITICALITY_VALUES = {
    critical: 3,
    relevant: 2,
    accessory: 1
};

export function calculateIVP(protocol, answers) {
    const protocolData = PROTOCOLS[protocol];
    const questions = protocolData.questions;
    const weights = protocolData.weights;

    // Group questions by variable
    const variableQuestions = {};
    questions.forEach(q => {
        if (!variableQuestions[q.variable]) variableQuestions[q.variable] = [];
        variableQuestions[q.variable].push(q);
    });

    const variableScores = {};
    let knockouts = [];

    // Calculate score per variable
    Object.keys(variableQuestions).forEach(variable => {
        const vQuestions = variableQuestions[variable];
        const totalCriticality = vQuestions.reduce((sum, q) => sum + CRITICALITY_VALUES[q.criticality], 0);
        const activeCriticality = vQuestions
            .filter(q => answers[q.id] === true)
            .reduce((sum, q) => sum + CRITICALITY_VALUES[q.criticality], 0);

        const ratio = totalCriticality > 0 ? activeCriticality / totalCriticality : 0;
        variableScores[variable] = Math.round((5 - ratio * 4) * 100) / 100;
    });

    // Check knockouts
    questions.forEach(q => {
        if (q.knockout && answers[q.id] === true) {
            knockouts.push(q);
        }
    });

    // Calculate final IVP
    let ivpScore = 0;
    Object.keys(weights).forEach(variable => {
        const score = variableScores[variable] || 5;
        ivpScore += score * weights[variable];
    });
    ivpScore = Math.round(ivpScore * 100) / 100;

    // Calculate critical lever (palanca crítica)
    let maxDelta = 0;
    let criticalLever = null;
    Object.keys(weights).forEach(variable => {
        const score = variableScores[variable] || 5;
        const delta = (5 - score) * weights[variable];
        if (delta > maxDelta) {
            maxDelta = delta;
            criticalLever = variable;
        }
    });

    const projectedScore = Math.round((ivpScore + maxDelta) * 100) / 100;

    return {
        ivpScore,
        variableScores,
        knockouts,
        hasKnockouts: knockouts.length > 0,
        criticalLever,
        maxDelta: Math.round(maxDelta * 100) / 100,
        projectedScore: Math.min(projectedScore, 5)
    };
}