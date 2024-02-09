import axios from "axios";
import { redirect } from "next/navigation";
import React from "react";
import Cookies from "universal-cookie";
const API = 'https://stingray-app-2uvnh.ondigitalocean.app/api/auth/signin'


const cookies = new Cookies()

async function submitData(formData) {
    'use server';
    console.log(formData)

    const email = formData.get('email')
    const password = formData.get('password')

    await axios.post(`${API}`, { email, password })
        .then(res => {
            console.log(res)
            const { accessToken, id } = res.data
            cookies.set('user_id', id)
            cookies.set('accessToken', accessToken)

        })
        .catch(err => {
            console.log(err)
        })

    await redirect('/counter')

}

const page = () => {
    return (
        <div className="hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                        a id nisi.
                    </p>
                </div>
                <div className="w-full max-w-sm shadow-2xl card shrink-0 bg-base-100">
                    <form className="card-body" action={submitData}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="mt-6 form-control">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;
