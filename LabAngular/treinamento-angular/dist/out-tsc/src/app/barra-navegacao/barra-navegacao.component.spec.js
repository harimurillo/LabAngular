import { async, TestBed } from '@angular/core/testing';
import { BarraNavegacaoComponent } from './barra-navegacao.component';
describe('BarraNavegacaoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BarraNavegacaoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BarraNavegacaoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=barra-navegacao.component.spec.js.map