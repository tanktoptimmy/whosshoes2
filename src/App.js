import React, { useState } from "react";
import { css, StyleSheet } from "aphrodite";

const Boo = () => {

  const [shoe, setShoe] = useState(0);
  const [show, setShow] = useState(false);
  const [reveal, setReveal] = useState(false);

  const persons = ["Alex", "Layla", "Jess", "Rory", "Chris", "Andy", "Ashley", "Lisa", "Cy", "Sharyn", "Tim", "Jacob", "Adam"]
  const person = persons[shoe]
  const suffix = person === "Layla" ? "png" : "jpg";
  const showing = `https://timparry.bitbucket.io/images/shoes/${person.toLowerCase()}.${suffix}`;

  return (
    <div className={css(styles.main)}>

    <div><h1>Who's Shoes Are Those?</h1>
      <p>The Yello-Jello Shoe Guessing Game</p>
    </div>
    {!show && <button onClick={()=>setShow(true)}>START GUESSING</button>}

    {show && <>
      <div className={css(styles.pictureHolder)}>
        <div className={css(styles.picture)}>
          <img className={css(styles.shoePic)} src={showing} alt="shoe"/>
          {reveal && <div className={css(styles.person)}>{person}</div>}
        </div>
      </div>
      <div className={css(styles.buttonHolder)}>
        <button  disabled={shoe === 0  ? "disabled" : false} onClick={()=>{
          setShoe(shoe-1);
          setReveal(false);
        }}>Previous</button>
        <button disabled={shoe < persons.length -1 ? false : "disabled"} onClick={()=>{
          setShoe(shoe+1)
          setReveal(false)
        }}>Next</button>
        <button onClick={()=>setReveal(true)}>Reveal</button>
      </div>
    </>
    }
  </div>
)
};
 
export default Boo;

const styles = StyleSheet.create({
  main: {
    fontFamily: "Garamond",
    display: "flex",
    flexDirection: "column",
    height: "90vh",
    justifyContent: "space-between",
    textAlign: "center"
  },
  buttonHolder: {
    marginTop: "21px"
  },
  pictureHolder: {
    height: "800px",
    width: "800px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    backgroundImage: "url('https://timparry.bitbucket.io/images/frames/frame0.png')",
    backgroundSize: "contain",
    backgroundRepeat:"no-repeat",
    backgroundPosition: "center"
  },
  picture: {
    height: "70%",
    width: "40%",
    border: "10px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },
  shoePic: {
    maxWidth: "320px",
    maxHeight: "400px"
  },
  person: {
    position: "absolute",
    bottom: "8px",
    backgroundColor: "#ffdf00",
    padding: "8px",
    fontFamily: "Garamond"
  }
});
