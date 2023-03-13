export interface ReactHoc {
  <P>(WrappedComponent: React.ComponentType<P>): React.FC<P>;
}