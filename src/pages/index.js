import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import featureImage from "../../static/images/hero.jpg";

const IndexPage = () => (
    <Layout>
        <SEO title="Make your Staff and Workspace Happy"/>

        <div className={"page-header home"}>
            <h1>Preparaing for the next generation.</h1>
            <p>We are creating a new model for solving sustainability problems for India.</p>
            {/* <img alt={"Dashboard"} src={featureImage}/> */}
        </div>

        <div className={"container"}>
            <div className={"features"}>



            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Have any questions?</h2>
                    {/* <p>Sign up and start increasing the productivity of your business with CleaningIndia.</p> */}
                </div>

                <div className={"button"}>
                    <a href="mailto:priyanshu@protonmail.com">Email Us</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
