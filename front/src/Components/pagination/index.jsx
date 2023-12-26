import styles from "../pages/Docs.module.css"

// eslint-disable-next-line react/prop-types
const Pagination = ({setCurrentPage,currentPage, pages }) => {
    return(
    <div className={styles.btn_container}>
        {Array.from(Array(pages), (item, index) => {
            const uniqueKey = `page_${index}`
            return (
                <div  key={uniqueKey}>
                    <button
                    style={index === currentPage ? {backgroundColor: "#1eb2a6", color: "#fff"} : null} 
                    className={styles.btn_page}
                    value={index} 
                    onClick={(e) => setCurrentPage(Number(e.target.value))}>
                        {index + 1}
                    </button>
                </div>
            )
        })}
    </div>

    )
}
export default Pagination