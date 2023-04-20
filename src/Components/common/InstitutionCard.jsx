import styles from "../../AllCss/Education.module.css"
function InstitutionCard({  name, img, address, learn }) {
return (
       <div className={styles.institution} data-aos='slide-up'>
          <div>
             <h3 style={{paddingBottom:"15px" , marginTop:"10px"}}>{name}</h3>
             <div>{address}</div>
             <div className={styles.skills}  >
                {
                   learn.map(item => (
                      <div>
                         <img src={item.logoimage} alt={item.title} />
                         <span>{item.title}</span>
                      </div>
                   ))
                }
             </div>
          </div>
          <div className={styles.instImgDiv}>
             <img src={img} alt="institution" />
          </div>
       </div>
    );
 }
 
 export default InstitutionCard;