export function useGetNestedComponent<T>(component: any[] | undefined) {
  return component?.[0] as T | undefined;
}
