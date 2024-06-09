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
  const pacientesAsignadosAPediatria = obtenPacientesAsignadosAPediatria(pacientes);
  for (let i = 0; i < pacientesAsignadosAPediatria.length; i++) {
    if (pacientesAsignadosAPediatria[i].edad < 10) {
      listaDePacientes = [...listaDePacientes, { ...pacientesAsignadosAPediatria[i] }];
    }
  }
  return listaDePacientes;
};

export const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
      activarProctolo = true;
    }
  }
  return activarProctolo;
};

export const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  let pacientesReasignadosAMedicoFamilia: Pacientes[] = [];
  const pacientesAsignadosAPediatria = obtenPacientesAsignadosAPediatria(pacientes);
  for (let i = 0; i < pacientesAsignadosAPediatria.length; i++) {
    pacientesReasignadosAMedicoFamilia = [
      ...pacientesReasignadosAMedicoFamilia,
      { ...pacientesAsignadosAPediatria[i], especialidad: 'Medico de familia' },
    ];
  }
  return pacientesReasignadosAMedicoFamilia;
};

export const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  const pacientesAsignadosAPediatria = obtenPacientesAsignadosAPediatria(pacientes);
  return pacientesAsignadosAPediatria.length > 0 ? true : false;
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
    if (pacientes[i].especialidad === 'Medico de familia') {
      numeroPacientesPorEspecialidad.medicoDeFamilia++;
    } else if (pacientes[i].especialidad === 'Pediatra') {
      numeroPacientesPorEspecialidad.pediatria++;
    } else if (pacientes[i].especialidad === 'Cardiólogo') {
      numeroPacientesPorEspecialidad.cardiologia++;
    }
  }
  return numeroPacientesPorEspecialidad;
};
