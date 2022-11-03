export class RouterService {
  private readonly routesToComponentsMapper: Record<string, any>;
  constructor(routesToComponentMapper: Record<string, any>) {
    this.routesToComponentsMapper = routesToComponentMapper;
  }

  public getAllRoutesWithComponents() {
    return this.routesToComponentsMapper;
  }
}
