import moment from 'moment'
import styles from '../assets/styles/certificateGenerator.module.scss'
import logo from '../assets/image.png';

const Certificate = ({ name, course, dateOfConductStart, dateOfConductEnd, signature, signatureDetails, certificationId }) => {
  return (
    <>
      <div className={styles.certificateWrapper}>
        <div className={styles.certificateContainer}>
          <div>Logo Here</div>
          <img src={logo} alt="not found" className={styles.imggg}/> {/* Add the image source here */}
          {/* <h1 className={styles.heading}>CERTIFICATE OF APPRECIATION</h1> */}

          {/* <span className={styles.smallText}>This certificate is proudly awarded to</span> */}

          <p className={styles.primaryItalicText}>{name}</p>

          <span className={styles.smallTextF}>for successfully completing the course</span>

          <h2 className={styles.smallTextS}>{course}</h2>

          <span className={styles.smallTextT}>{`conducted from ${
            dateOfConductStart ? moment(dateOfConductStart).format('MMMM YYYY') : '-'
          } to ${dateOfConductEnd ? moment(dateOfConductEnd).format('MMMM YYYY') : '-'}`}</span>
{/* 
          <div className={styles.signatureBlock}>
            <img className={styles.signatureImage} src={signature.preview} alt='' />

            <span className={styles.horizontalBar} />

            <span className={styles.smallText}>{signatureDetails}</span>
          </div> */}
          <p className={styles.primaryItalicTextS}>{certificationId}</p>
        </div>

        <button style={{ marginTop: ' 3rem' }}>Download PDF</button>
      </div>
    </>
  )
}

export default Certificate
