import { useSelector } from 'react-redux';

export function usePresentSelector(selector) {
  const presentState = useSelector(state => {
    return state.present;
  });
  return selector(presentState);
}
