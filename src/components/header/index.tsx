import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import * as Styles from "./styled";
import brand from "../../images/brand.png";

export function LandingLinks() {
    return (
         <Styles.Nav>
                        <li className="link"><Link to="">Programs</Link></li>
                        <li className="link"><Link to="">Our campus</Link></li>
                        <li className="link"><Link to="">International students</Link></li>
                    </Styles.Nav>
    )
}

export function ApplicationLinks() {
    const location = useLocation().pathname;
    return (
          <Styles.Nav>
            <li className="link">
                <Link
                    to="/umat/student/instructions"
                    className={location.includes("/student/instructions") ? "side-bar-active" : ""}
                >
                    Instructions
                </Link>
            </li>
            <li className="link">
                <Link
                    to="/umat/student/programs"
                       className={location.includes("/student/programs") ? "side-bar-active" : ""}
                >
                    Programs
                </Link>
            </li>
             
            <li className="link"><Link to=""><FiUser className="user"/>
            </Link></li>
             </Styles.Nav>
     )
}

export function Header() {
    const location = useLocation().pathname;

    return (
        <Styles.Heading>
            <Styles.About>
                <Styles.Contact>
                    <Styles.Section>
                     <Styles.IconContainer>
                        <AiFillPhone color="white" size={0} />
                      </Styles.IconContainer>
                        <Styles.Text>++05737489</Styles.Text>
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
                    {
                    location.includes("student") ? <ApplicationLinks /> :
                    <LandingLinks />
                    
             }
                </nav>
            </Styles.Brand>
        </Styles.Heading>
    )
}