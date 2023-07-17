import React from "react";
import ReactPaginate from "react-paginate";
import styles from './Pagination.module.scss'

export const Pagination=({currentPage,onChangePage})=>{
    return(
        <ReactPaginate
       className={styles.root}
       break="..."
       nextLabel=">"
       onPageChange={(event) => onChangePage(event.selected + 1)}
       pageRangeDisplayes={4}
       pageCount={3}
       previousLabel="<"
       //forcePage={currentPage-1}
       renderOnZeroPageCount={null} />
    )
}

export default Pagination;