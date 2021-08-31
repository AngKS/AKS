import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className=" no-gutter shadow shadow-md">

            <div className="bg-secondary">
                <ul className="nav d-none row d-md-flex justify-content-md-between align-content-end">
                    <div className=" col-md-6 p-0">
                        <li className="nav-item p-3">
                            <Link className="nav-link">
                                <div className="d-flex justify-content-start align-items-center">
                                    <img className="img-fluid rounded-circle" src="https://github.com/AngKS/AKS/blob/master/aks.png?raw=true" alt="LOGO" />
                                    <h1 className="text-black handwriting mx-3">AKS Bot</h1>
                                </div>
                            </Link>
                        </li>
                    </div>
                    <div className=" col-md-6 p-0 d-flex justify-content-md-end align-items-center">

                        <li className="nav-item p-3">
                            <Link className="nav-link"><h3 className="text-black">Blog</h3></Link>
                        </li>
                        <li className="nav-item p-3">
                            <Link className="nav-link"><h3 className="text-black">Docs</h3></Link>
                        </li>

                    </div>
                </ul>
                <ul className="nav row d-md-none align-content-end">
                    <div class="col-md-12 d-flex justify-content-around align-items-center">
                        <li class="btn nav-item p-3 mx-4">
                            <a class='text-decoration-none white' href='#'>
                                <div className="d-flex justify-content-start align-items-center">
                                    <h1 className="text-black handwriting mx-3">AKS Bot</h1>
                                </div>
                            </a>
                        </li>
                        <li class="btn nav-item p-3 mx-4"><a class='text-decoration-none white'
                            href='./html/docs.html'><h3 className="text-black">Blog</h3></a></li>
                        <li class="btn nav-item p-3 mx-4"><a class='text-decoration-none white' href='#'><h3 className="text-black">Docs</h3></a></li>
                    </div>
                </ul>
            </div>
            <section className="text-center p-3">
                


            </section>

        </div>
    )
}

export default Home
