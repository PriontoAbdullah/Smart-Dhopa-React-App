import service12 from './dryCleaning/dryCleaningHouse';
import service10 from './dryCleaning/dryCleaningMan';
import service11 from './dryCleaning/dryCleaningWoman';
import service15 from './emergencyService/EmergencyServiceHouse';
import service13 from './emergencyService/EmergencyServiceMan';
import service14 from './emergencyService/EmergencyServiceWomen';
import service9 from './IronAndFold/IronAndFoldHouse';
import service7 from './IronAndFold/IronAndFoldMan';
import service8 from './IronAndFold/IronAndFoldWomen';
import service18 from './subscriptionBased/subscriptionBasedHouse';
import service16 from './subscriptionBased/subscriptionBasedMan';
import service17 from './subscriptionBased/subscriptionBasedWomen';
import service6 from './washAndFold/washAndFoldHouse';
import service4 from './washAndFold/washAndFoldMan';
import service5 from './washAndFold/washAndFoldWomen';
import service3 from './washAndIron/washAndIronHouse';
import service1 from './washAndIron/washAndIronMan';
import service2 from './washAndIron/washAndIronWoman';

const allProductItem = [
	...service1,
	...service2,
	...service3,
	...service4,
	...service5,
	...service6,
	...service7,
	...service8,
	...service9,
	...service10,
	...service11,
	...service12,
	...service13,
	...service14,
	...service15,
	...service16,
	...service17,
	...service18
];

export default allProductItem;
