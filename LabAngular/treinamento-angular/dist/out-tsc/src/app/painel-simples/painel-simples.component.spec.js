import { async, TestBed } from '@angular/core/testing';
import { PainelSimplesComponent } from './painel-simples.component';
describe('PainelSimplesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PainelSimplesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PainelSimplesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=painel-simples.component.spec.js.map