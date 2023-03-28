export default function PortfolioItems({item}) {
    return (
        <div className="portfolio_card" key={item.id}>
            <img src={item.image} alt={item.id} className="portfolio_img"/>

            <h3 className="portfolio_title">{item.title}</h3>

            <a href={item.link} className="portfolio_button">
                Demo <i className="bx bx-right-arrow-alt portfolio_button-icon"></i>
            </a>
        </div>
    )
}