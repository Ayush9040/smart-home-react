const FooterLinks = (props) => {
    return(
        <div>
            <h6>{props.title}</h6>
            <ul>
                {
                  props.linksData.map((item,index) => {
                    return(
                        <li key={index}>
                            <a href={item.footerItemLink}>
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