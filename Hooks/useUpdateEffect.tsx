import { useRef, useEffect, EffectCallback, DependencyList } from 'react'

/**
 * A custom useEffect hook that only triggers on updates, not on the initial mount.
 *
 * @param effect - The effect function to be executed after updates.
 * @param dependencies - The dependency array that determines when the effect runs.
 */
export default function useUpdateEffect(
  effect: EffectCallback,
  dependencies: DependencyList = []
): void {
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      return effect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
}
