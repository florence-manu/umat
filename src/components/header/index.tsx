import React from "react";
import { Link } from "react-router-dom";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import * as Styles from "./styled";
import brand from "../../images/brand.png";

export function Header() {
    
    return (
        <Styles.Heading>
            <Styles.About>
                <Styles.Contact>
                    <Styles.Section>
                     <Styles.IconContainer>
                        <AiFillPhone color="white" size={0} />
                      </Styles.IconContainer>
                        <Styles.Text>05737489</Styles.Text>
                    </Styles.Section>
                    <Styles.Section>
                     <Styles.IconContainer>
                        <AiFillMail/>
                      </Styles.IconContainer>
                        <Styles.Text>support@umat.edu.gh</Styles.Text>
                    </Styles.Section>
                 </Styles.Contact>
                <Styles.Language>
                    <Styles.Select name="language" id="language">
                        <option value="English" selected>
                            <span>English</span>
                        </option>
                    </Styles.Select>
            </Styles.Language>
            </Styles.About>
            <Styles.Brand>
                <Styles.Section>
                    <Styles.Logo src={brand} alt="UMAT" />
                     <Styles.BrandText>   University of mines <br />
                        and technology
                    </Styles.BrandText>
                </Styles.Section>
                <nav>
                    <Styles.Nav>
                        <li className="link"><Link to="">Programs</Link></li>
                        <li className="link"><Link to="">Our campus</Link></li>
                        <li className="link"><Link to="">International students</Link></li>
                    </Styles.Nav>
                </nav>
            </Styles.Brand>
        </Styles.Heading>
    )
}