import React from "react"
import data from "../funds.json"
import styles from './fundsdata.module.css'
import { FaShoppingCart } from 'react-icons/fa';
let fundsData = data;
let fundsList = fundsData.result.funds
console.log(fundsData.result.funds, "ash")
console.log(fundsList, "ashkkk")
class FundsData extends React.Component {
    // const {fundsList} = props
    constructor(props) {
        super(props)

        this.state = {
            pages:[],
            activePage: 1
        }
    }

    handlePages = (e, active) => {
        let { activePage, pages } = this.state
        if (active === 'prev') {
            if (Number(activePage) === 1) {
                this.setState({
                    activePage: 1
                })
            } else {
                this.setState({
                    activePage: activePage - 1
                })
            }
        } else if (active === 'next') {
            if (Number(activePage) === Number(pages.length)) {
                this.setState({
                    activePage: pages.length
                })
            } else {
                this.setState({
                    activePage: activePage + 1
                })
            }

        } else {
            this.setState({
                activePage: active
            })
        }

        // this.setState({
        //     pages:[]
        // })
    }

    render() {

        let {pages, activePage } = this.state
        let total = 100
        let perPage = 10
        let pageCount = Math.ceil(total / perPage)
        if(pages.length === 0) {
            for(let i=0;i<pageCount;i++) {
    
                pages.push(i+1)
    
            }
        }


        let page = activePage
        let low = (page - 1) * perPage
        let high = page * perPage
    // console.log(pages)
        return (
            <div >
                {
                    fundsList.filter((a,i) => i>=low && i<high).map(item => {
                        return (
                            <div className={styles.card}>
                                <div className={styles.grid}>
                                    <div className={styles.flex}>
                                        <div>
                                            <img className={styles.img} src="https://via.placeholder.com/150" alt="" />
                                        </div>
                                        <div>
                                            <div className={styles.fundName}>{item.name}</div>
                                            <p className={styles.fundType}>{item.FundType} MidCap</p>
                                            {/* <p>MidCap</p> */}
                                        </div>

                                    </div>
                                    <div className={styles.greaterThan}>{`>`}</div>
                                </div>

                                <div className={styles.btnBottom}>
                                    <div className={styles.grid}>
                                        <div className={styles.grid}>
                                            <div className={styles.showPerform}>Show performance Details  </div>
                                            <div className={styles.showPerform}>V</div>
                                        </div>
                                        <div>  <div className={styles.grid}>
                                            <div className={styles.investNow}> <FaShoppingCart />  </div>
                                            <div className={styles.investNow}>Invest Now</div>
                                        </div></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className={styles.pagination}>

                    {pages && 
                        < >
                            <button className="" key={"prev"} onClick={(e) => this.handlePages(e, "prev")}>{`<`}</button>
                            {pages.map(item => (
                                <button  className={activePage === item ? styles.activePage : styles.normalPage} key={item} onClick={(e) => this.handlePages(e, item)}>{item}</button>
                            ))}
                            <button className="" key={"next"} onClick={(e) => this.handlePages(e, "next")}>{`>`}</button>
                        </>
                    }
                </div>
            </div>
        );
    }
}
export default FundsData;