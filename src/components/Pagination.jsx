import '@styles/pagination.css';
import { FormattedMessage } from 'react-intl';

export const Pagination = ({ pages, currentPage, onPreviousPage, onNextPage }) => {

  return (
    <div className="pagination">
      <button 
        disabled = { currentPage === 1 }
        className="pagination__button pagination__button--prev" 
        onClick={onPreviousPage}>
        <FormattedMessage id="previous" defaultMessage="Previous"/>
      </button>
      <button 
        disabled = { currentPage === pages }
        className="pagination__button pagination__button--next" 
        onClick={onNextPage}>
        <FormattedMessage id="next" defaultMessage="Next"/>
      </button>      
      <span className="pagination__text">
        { currentPage }  
        &nbsp;<FormattedMessage id="of" defaultMessage="of"/> { pages }  
        &nbsp;<FormattedMessage id="pages" defaultMessage="Pages"/>
      </span>
    </div>
  )
}
