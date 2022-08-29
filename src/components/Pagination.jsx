import '@styles/pagination.css';

export const Pagination = ({ pages, currentPage, onPreviousPage, onNextPage }) => {

  return (
    <div className="pagination">
      <button 
        disabled = { currentPage === 1 }
        className="pagination__button pagination__button--prev" 
        onClick={onPreviousPage}>Anterior
      </button>
      <button 
        disabled = { currentPage === pages }
        className="pagination__button pagination__button--next" 
        onClick={onNextPage}>Siguiente
      </button>      
      <span className="pagination__text">{ currentPage } de { pages } Páginas</span>
    </div>
  )
}
