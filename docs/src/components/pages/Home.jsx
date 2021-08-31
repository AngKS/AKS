import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="container-fluid shadow shadow-md">

            <div className="">
                <ul className="nav d-none row d-md-flex justify-content-md-between align-content-end">
                    <div className="col-md-6">
                        <li className="nav-item p-3">
                            <Link className="nav-link">Home</Link>
                        </li>
                    </div>
                    <div className="col-md-6 d-flex justify-content-md-end">
                        <li className="nav-item p-3">
                            <Link className="nav-link">Blog</Link>
                        </li>
                        <li className="nav-item p-3">
                            <Link className="nav-link">Docs</Link>
                        </li>
                    </div>
                </ul>
                <ul className="nav row d-md-none align-content-end">
                <div class="col-md-12 d-flex justify-content-around">
                    <li class="btn nav-item p-3 mx-4"><a class='text-decoration-none white' href='#'>Home</a></li>
                    <li class="btn nav-item p-3 mx-4"><a class='text-decoration-none white'
                            href='./html/docs.html'>Blog</a></li>
                    <li class="btn nav-item p-3 mx-4"><a class='text-decoration-none white' href='#'>Docs</a></li>
                </div>
                </ul>
            </div>
            <section className="text-center bg-primary p-3">
                <div className="d-flex justify-content-center align-items-center">
                    <img className="img-fluid rounded-circle" src="https://github.com/AngKS/AKS/blob/master/aks.png?raw=true" alt="LOGO" />
                    <h1 className="text-white mx-3 bigger">AKS Bot</h1>
                </div>
                

            </section>

        </div>
    )
}

export default Home
