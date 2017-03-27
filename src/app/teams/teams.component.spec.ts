import { TestBed, inject } from '@angular/core/testing';

import { TeamsComponent } from './teams.component';

describe('a teams component', () => {
	let component: TeamsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TeamsComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TeamsComponent], (TeamsComponent) => {
		component = TeamsComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});