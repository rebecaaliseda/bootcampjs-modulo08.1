import { Pacientes, NumeroPacientesPorEspecialidad } from './modelo';

export const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  let listaDePacientes: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === 'Pediatra') {
      listaDePacientes = [...listaDePacientes, { ...pacientes[i] }];
    }
  }
  return listaDePacientes;
};

export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let listaDePacientes: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === 'Pediatra' && pacientes[i].edad < 10) {
      listaDePacientes = [...listaDePacientes, { ...pacientes[i] }];
    }
  }
  return listaDePacientes;
};

export const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
      activarProtocolo = true;
      break;
    }
  }
  return activarProtocolo;
};

export const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  let listaDePacientes: Pacientes[] = pacientes;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === 'Pediatra') {
      pacientes[i].especialidad = 'Medico de familia';
    }
  }
  return listaDePacientes;
};

export const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let hayPacientesDePediatria = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === 'Pediatra') {
      hayPacientesDePediatria = true;
      break;
    }
  }
  return hayPacientesDePediatria;
};

export const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let numeroPacientesPorEspecialidad: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };
  for (let i = 0; i < pacientes.length; i++) {
    switch (pacientes[i].especialidad) {
      case 'Medico de familia':
        numeroPacientesPorEspecialidad.medicoDeFamilia++;
        break;
      case 'Pediatra':
        numeroPacientesPorEspecialidad.pediatria++;
        break;
      case 'Cardiólogo':
        numeroPacientesPorEspecialidad.cardiologia++;
        break;
      default:
        break;
    }
  }
  return numeroPacientesPorEspecialidad;
};
