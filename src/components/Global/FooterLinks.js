const FooterLinks = (props) => {
    return(
        <div>
            <h6 className="sh-footer__head">{props.title}</h6>
            <ul>
                {
                  props.linksData.map((item,index) => {
                    return(
                        <li key={index}>
                            <a className='sh-footer__link' href={item.footerItemLink}>
                              {item.footerItemName}
                            </a>
                        </li>
                    )
                  })
                }
            </ul>
        </div>
    )
}
export default FooterLinks;