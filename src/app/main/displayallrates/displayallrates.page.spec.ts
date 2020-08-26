import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayallratesPage } from './displayallrates.page';

describe('DisplayallratesPage', () => {
  let component: DisplayallratesPage;
  let fixture: ComponentFixture<DisplayallratesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayallratesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayallratesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
