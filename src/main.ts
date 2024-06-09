import './style.css';

import { pacientes } from './modelo';
import {
  obtenPacientesAsignadosAPediatria,
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios,
  activarProtocoloUrgencia,
  reasignaPacientesAMedicoFamilia,
  HayPacientesDePediatria,
  cuentaPacientesPorEspecialidad,
} from './motor';

// Mostrar por consola paciences pediatría
const pacientesAsignadosAPediatria = obtenPacientesAsignadosAPediatria(pacientes);
console.log({ pacientesAsignadosAPediatria });

// Mostrar por consola paciences pediatría y menor de 10 años
const pacientesAsignadosAPediatriaMenos10Anios =
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log({ pacientesAsignadosAPediatriaMenos10Anios });

// Mostrar por consola activación protocolo de urgencia
const activoProtocoloDeUgencia = activarProtocoloUrgencia(pacientes);
console.log({ activoProtocoloDeUgencia });

// Mostrar por consola paciences reasignados a médico de familia
const pacientesReasignadosAMedicoFamilia = reasignaPacientesAMedicoFamilia(pacientes);
console.log({ pacientesReasignadosAMedicoFamilia });

// Mostrar por consola si hay o no pacientes asignados a pediatría
const hayPacientesAsignadosAPediatria = HayPacientesDePediatria(pacientes);
console.log({ hayPacientesAsignadosAPediatria });

// Mostrar por consola el número de pacientes por especialidad
const numPacientesPorEspecialidad = cuentaPacientesPorEspecialidad(pacientes);
console.log({ numPacientesPorEspecialidad });
