import { GeometryModule } from './geometry.module';

describe('GeometryModule', () => {
  let geometryModule: GeometryModule;

  beforeEach(() => {
    geometryModule = new GeometryModule();
  });

  it('should create an instance', () => {
    expect(geometryModule).toBeTruthy();
  });
});
