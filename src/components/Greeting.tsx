{
  /* // const Greeting = ({name}) => { */
}
{
  /* //   return (
//     <body> */
}
{
  /* //   <div className={classes.head}>
    //     <div className={classes.icon}>
    //       <img className={classes.pic} src="_images_home_cleverse-company.png" />
    //       <p className={classes.blog}>BLOG</p>
    //     </div>
    //     <div>
    //       <p className={classes.viwe}>viwe</p>
    //     </div>
    //   </div>

    //   <div className={classes.boxofBlog}>
    //     <div className={classes.card}>
    //       <div className={classes.nameBox}>
    //         <p className={classes.name}>Akidanai</p>
    //         <p className={classes.date}>Dec 27th,2022 . 6 min</p>
    //       </div>
    //       <div>
    //         <h3>Solidity Made Easy with Hardhat</h3>
    //         <p className={classes.p}>
    //           A walkthrough guide on how to use Hardhat to develop a smart contract with ease!
    //         </p>
    //       </div>
    //       <div className={classes.boxofhashtag}>
    //         <button className={classes.hashtag}>#Web3</button>
    //         <button className={classes.hashtag}>#Hardhat</button>
    //         <button className={classes.hashtag}>#Tutorial</button>
    //       </div>
    //     </div>
    //     <div className={classes.card}>
    //       <div className={classes.nameBox}>
    //         <p className={classes.name}>Nutchanon</p>
    //         <p className={classes.date}>Dec 27th,2022 . 8 min</p>
    //       </div>
    //       <div>
    //         <h3>Solving DApps problem with Merkle drop</h3>
    //         <p className={classes.p}>
    //           When developing your DApp, would transactiopn feels be quite expensive? What do you decide between
    //           scaling, pice, and security?
    //         </p>
    //       </div>
    //       <div>
    //         <button className={classes.hashtag}>#Web3</button>
    //         <button className={classes.hashtag}>#Smart-contract</button>
    //       </div>
    //     </div>
    //     <div className={classes.card}>
    //       <div className={classes.nameBox}>
    //         <p className={classes.name}>Akidanai</p>
    //         <p className={classes.date}>Dec 26th,2022 . 5 min</p>
    //       </div>
    //       <div>
    //         <h3>Welcome to the word of Web</h3>
    //         <p className={classes.p}>
    //           Web 3.0 dubbed the next state for the internet, is being talked about more and mor as the days go by.So
    //           what is it exactiy?
    //         </p>
    //       </div>
    //       <div>
    //         <button className={classes.hashtag}>#Introduction</button>
    //         <button className={classes.hashtag}>#web3</button>
    //       </div>
    //     </div>
    //     <div className={classes.card}>
    //       <div className={classes.nameBox}>
    //         <p className={classes.name}>Arken</p>
    //         <p className={classes.date}>Nov 26th,2022 . 3 min</p>
    //       </div>
    //       <div>
    //         <h3>Introducing The DeFi Reviwe by Arken Finance</h3>
    //         <p className={classes.p}>
    //           {' '}
    //           DeFi`s innovation cycle is hyper-fast. To find user insight or make critical business decision, our team
    //           relies heavily on date. We compile our little insight into this publication, The Defi Review.
    //         </p>
    //       </div>
    //       <div>
    //         <button className={classes.hashtag}>#Web3</button>
    //         <button className={classes.hashtag}>#Defi-reviwe</button>
    //       </div>
    //     </div>
    //   </div> */
}

//     </body>
//   )
// }
// export default Greeting
import classes from './Greeting.module.css'

interface IGreetingProps {
  name: string
  greetingMsg: string
  isLoggedIn: boolean
}

const Greeting = ({ name, greetingMsg, isLoggedIn }: IGreetingProps) => {
  return (
    <div className={classes.card}>
      <h3>{greetingMsg}</h3>
      <p>{isLoggedIn ? name : 'Unknown'}</p>
    </div>
  )
}

export default Greeting
