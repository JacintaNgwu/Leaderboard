/* eslint-disable no-restricted-globals */

// getting scores after refreshing
const refreshBtn = () => {
  const refresh = document.querySelector('#refresh');
  refresh.addEventListener('click', () => {
    location.reload();
  });
};
export default refreshBtn;