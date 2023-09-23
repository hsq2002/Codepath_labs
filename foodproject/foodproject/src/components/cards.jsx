import React, {useState}  from "react";
import Event from "./Event";
import "./cards.css"

const Card = () => {

    return (
        <div className="food">
            <table>
                <tbody>
                    <tr>
                        <div className="card">
                            <img src="https://cdn.vox-cdn.com/thumbor/vJgPALVvSQOnochroetmI4iEIUw=/28x0:472x333/1200x800/filters:focal(28x0:472x333)/cdn.vox-cdn.com/uploads/chorus_image/image/38807838/halalguys-chain.0.jpg"
                                alt="Halal Guys"
                                style={{ width: "300px", height: "300px" }}/>
                            <div className="card-text">
                                <Event restaurant="Halal Guys" cuisine="Middle Eastern" color="red" />
                                <button>Menu</button>
                            </div>
                        </div>
                        <th className="card">
                        <img src="https://nypost.com/wp-content/uploads/sites/2/2021/08/birria-tacos-birria-landia-8.jpg?quality=75&strip=all&w=1024" alt="Birria-Landia"
                                style={{ width: "300px", height: "300px" }}/>
                            <div className="card-text">
                                <Event restaurant="Birria-Landia" cuisine="Mexican" color="red" />
                                <button>Menu</button>
                            </div>
                        </th>
                        <th className="card">
                        <img src="https://nypost.com/wp-content/uploads/sites/2/2021/08/birria-tacos-birria-landia-8.jpg?quality=75&strip=all&w=1024" alt="Birria-Landia"
                                style={{ width: "300px", height: "300px" }}/>
                            <div className="card-text">
                                <Event restaurant="Birria-Landia" cuisine="Mexican" color="red" />
                                <button>Menu</button>
                            </div>
                        </th>

                    </tr>
                    <tr>
                    <th className="card">
                        <img src="https://nypost.com/wp-content/uploads/sites/2/2021/08/birria-tacos-birria-landia-8.jpg?quality=75&strip=all&w=1024" alt="Birria-Landia"
                                style={{ width: "300px", height: "300px" }}/>
                            <div className="card-text">
                                <Event restaurant="Birria-Landia" cuisine="Mexican" color="red" />
                                <button>Menu</button>
                            </div>
                        </th>
                        <th className="card">
                        <img src="https://nypost.com/wp-content/uploads/sites/2/2021/08/birria-tacos-birria-landia-8.jpg?quality=75&strip=all&w=1024" alt="Birria-Landia"
                                style={{ width: "300px", height: "300px" }}/>
                            <div className="card-text">
                                <Event restaurant="Birria-Landia" cuisine="Mexican" color="red" />
                                <button>Menu</button>
                            </div>
                        </th>
                        <th className="card">
                        <img src="https://nypost.com/wp-content/uploads/sites/2/2021/08/birria-tacos-birria-landia-8.jpg?quality=75&strip=all&w=1024" alt="Birria-Landia"
                                style={{ width: "300px", height: "300px" }}/>
                            <div className="card-text">
                                <Event restaurant="Birria-Landia" cuisine="Mexican" color="red" />
                                <button>Menu</button>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th className="card">
                        <img src="https://nypost.com/wp-content/uploads/sites/2/2021/08/birria-tacos-birria-landia-8.jpg?quality=75&strip=all&w=1024" alt="Birria-Landia"
                                style={{ width: "300px", height: "300px" }}/>
                            <div className="card-text">
                                <Event restaurant="Birria-Landia" cuisine="Mexican" color="red" />
                                <button>Menu</button>
                            </div>
                        </th>
                        <th className="card">
                        <img src="https://nypost.com/wp-content/uploads/sites/2/2021/08/birria-tacos-birria-landia-8.jpg?quality=75&strip=all&w=1024" alt="Birria-Landia"
                                style={{ width: "300px", height: "300px" }}/>
                            <div className="card-text">
                                <Event restaurant="Birria-Landia" cuisine="Mexican" color="red" />
                                <button>Menu</button>
                            </div>
                        </th>
                        <th className="card">
                        <img src="https://nypost.com/wp-content/uploads/sites/2/2021/08/birria-tacos-birria-landia-8.jpg?quality=75&strip=all&w=1024" alt="Birria-Landia"
                                style={{ width: "300px", height: "300px" }}/>
                            <div className="card-text">
                                <Event restaurant="Birria-Landia" cuisine="Mexican" color="red" />
                                <button>Menu</button>
                            </div>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Card;
