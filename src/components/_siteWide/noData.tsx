import NoData from 'assets/no-data.svg'

export const NoDataContent = ({ message = 'No Data' }) => (
  <div className='content-center'>
    <img src={NoData} alt='' />
    <div className='no-data-message'>{message}</div>
  </div>
)
