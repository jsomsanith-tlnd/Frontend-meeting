const { TDP_TEAM, TDS_TEAM, TFD_TEAM, TMC_TEAM, IAM_TEAM, TIC_TEAM } = require('./projects');
const { SURESNES_LOCATION, NANTES_LOCATION, BONN_LOCATION } = require('./locations');

const AXEL = {
	name: 'Axel',
	team: TFD_TEAM,
	location: NANTES_LOCATION,
};

const ABDEL = {
	name: 'Abdel',
	team: TDP_TEAM,
	location: SURESNES_LOCATION,
};

const CHARLES = {
	name: 'Charles',
	team: TDP_TEAM,
	location: SURESNES_LOCATION,
};

const FABIEN = {
	name: 'Fabien',
	team: TDP_TEAM,
	location: NANTES_LOCATION,
};

const GEOFFROY = {
	name: 'Geoffroy',
	team: TFD_TEAM,
	location: NANTES_LOCATION,
};

const JEAN_ALAIN = {
	name: 'Jean Alain',
	team: TDS_TEAM,
	location: NANTES_LOCATION,
};

const JEAN_MICHEL = {
	name: 'Jean Michel',
	team: TFD_TEAM,
	location: NANTES_LOCATION,
};

const JIMMY = {
	name: 'Jimmy',
	team: TDP_TEAM,
	location: SURESNES_LOCATION,
};

const JULIEN = {
	name: 'Julien',
	team: TDS_TEAM,
	location: SURESNES_LOCATION,
};

const MARIA = {
	name: 'Maria',
	team: TMC_TEAM,
	location: BONN_LOCATION,
};

const OLEG = {
	name: 'Oleg',
	team: TIC_TEAM,
	location: BONN_LOCATION,
};

const VIKTOR = {
	name: 'Viktor',
	team: IAM_TEAM,
	location: BONN_LOCATION,
};

const SEBASTIEN = {
	name: 'Sebastien',
	team: TDS_TEAM,
	location: NANTES_LOCATION,
};

const SYLVAIN = {
	name: 'Sylvain',
	team: TDS_TEAM,
	location: SURESNES_LOCATION,
};

const DEVELOPERS = [
	AXEL, ABDEL, CHARLES, FABIEN, GEOFFROY, JEAN_ALAIN, JEAN_MICHEL, JIMMY, JULIEN, MARIA, OLEG, VIKTOR, SEBASTIEN, SYLVAIN
];

module.exports = DEVELOPERS;
