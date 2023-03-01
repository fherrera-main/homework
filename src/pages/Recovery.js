import Button from "../components/common/Button";
import Input from '../components/common/Input'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "../components/PasswordRecovery/Recovery.module.css";

const Recovery = () => {
  return (
    <Container className={styles.formContainer}>
      <Row>
        <Col>
          <p className={"m-0 " + styles.headerlogo}>
            <span>
              <svg width="50" height="25" viewBox="0 0 50 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.53599 3.92662C6.27091 3.92662 6.91537 4.06795 7.46939 4.35061C8.03471 4.63327 8.47566 5.06291 8.79224 5.63954C9.10881 6.21616 9.2671 6.94542 9.2671 7.82732V13H7.63898V8.01388C7.63898 7.14329 7.42416 6.48752 6.99452 6.04657C6.57618 5.60562 5.9826 5.38514 5.21376 5.38514C4.63713 5.38514 4.134 5.49821 3.70436 5.72433C3.27471 5.95046 2.94117 6.284 2.70374 6.72495C2.47761 7.1659 2.36455 7.71426 2.36455 8.37003V13H0.736427V0.41598H2.36455V6.43664L2.04232 5.79217C2.33628 5.20424 2.78854 4.74633 3.39908 4.41844C4.00963 4.09056 4.72193 3.92662 5.53599 3.92662ZM16.13 13.1018C15.2255 13.1018 14.4228 12.9039 13.7218 12.5082C13.0208 12.1124 12.4668 11.5697 12.0597 10.8801C11.6527 10.1791 11.4492 9.38761 11.4492 8.50571C11.4492 7.6125 11.6527 6.82105 12.0597 6.13136C12.4668 5.44167 13.0208 4.90462 13.7218 4.5202C14.4228 4.12448 15.2255 3.92662 16.13 3.92662C17.0232 3.92662 17.8203 4.12448 18.5213 4.5202C19.2336 4.90462 19.7877 5.44167 20.1834 6.13136C20.5904 6.80975 20.7939 7.6012 20.7939 8.50571C20.7939 9.39891 20.5904 10.1904 20.1834 10.8801C19.7877 11.5697 19.2336 12.1124 18.5213 12.5082C17.8203 12.9039 17.0232 13.1018 16.13 13.1018ZM16.13 11.6772C16.7067 11.6772 17.2211 11.5471 17.6734 11.2871C18.1369 11.027 18.4987 10.6596 18.7588 10.1847C19.0188 9.69853 19.1489 9.13887 19.1489 8.50571C19.1489 7.86124 19.0188 7.30723 18.7588 6.84367C18.4987 6.3688 18.1369 6.00134 17.6734 5.74129C17.2211 5.48125 16.7067 5.35122 16.13 5.35122C15.5534 5.35122 15.039 5.48125 14.5867 5.74129C14.1345 6.00134 13.7727 6.3688 13.5013 6.84367C13.23 7.30723 13.0943 7.86124 13.0943 8.50571C13.0943 9.13887 13.23 9.69853 13.5013 10.1847C13.7727 10.6596 14.1345 11.027 14.5867 11.2871C15.039 11.5471 15.5534 11.6772 16.13 11.6772ZM34.2898 3.92662C35.0134 3.92662 35.6522 4.06795 36.2062 4.35061C36.7602 4.63327 37.1899 5.06291 37.4952 5.63954C37.8117 6.21616 37.97 6.94542 37.97 7.82732V13H36.3419V8.01388C36.3419 7.14329 36.1384 6.48752 35.7314 6.04657C35.3243 5.60562 34.7534 5.38514 34.0184 5.38514C33.4757 5.38514 33.0009 5.49821 32.5938 5.72433C32.1868 5.95046 31.8702 6.284 31.6441 6.72495C31.4293 7.1659 31.3219 7.71426 31.3219 8.37003V13H29.6937V8.01388C29.6937 7.14329 29.4902 6.48752 29.0832 6.04657C28.6875 5.60562 28.1165 5.38514 27.3703 5.38514C26.8389 5.38514 26.3697 5.49821 25.9626 5.72433C25.5556 5.95046 25.239 6.284 25.0129 6.72495C24.7868 7.1659 24.6737 7.71426 24.6737 8.37003V13H23.0456V4.01141H24.6059V6.40272L24.3515 5.79217C24.6341 5.20424 25.0694 4.74633 25.6574 4.41844C26.2453 4.09056 26.9293 3.92662 27.7095 3.92662C28.5688 3.92662 29.3093 4.14144 29.9312 4.57108C30.553 4.98942 30.9601 5.62823 31.1523 6.48752L30.4908 6.21616C30.7622 5.52647 31.2371 4.97246 31.9154 4.55412C32.5938 4.13578 33.3853 3.92662 34.2898 3.92662ZM44.9682 13.1018C44.0072 13.1018 43.1592 12.9039 42.4243 12.5082C41.7007 12.1124 41.1354 11.5697 40.7283 10.8801C40.3326 10.1904 40.1348 9.39891 40.1348 8.50571C40.1348 7.6125 40.327 6.82105 40.7114 6.13136C41.1071 5.44167 41.6442 4.90462 42.3225 4.5202C43.0122 4.12448 43.7867 3.92662 44.646 3.92662C45.5166 3.92662 46.2854 4.11883 46.9525 4.50324C47.6196 4.88766 48.1397 5.43037 48.5128 6.13136C48.8972 6.82105 49.0894 7.62946 49.0894 8.55659C49.0894 8.62442 49.0838 8.70357 49.0725 8.79402C49.0725 8.88447 49.0668 8.96927 49.0555 9.04841H41.4067V7.8782H48.2075L47.5461 8.28523C47.5574 7.70861 47.4387 7.19417 47.1899 6.74191C46.9412 6.28965 46.5964 5.93916 46.1554 5.69041C45.7258 5.43037 45.2226 5.30034 44.646 5.30034C44.0807 5.30034 43.5776 5.43037 43.1366 5.69041C42.6957 5.93916 42.3508 6.29531 42.1021 6.75887C41.8533 7.21112 41.729 7.73122 41.729 8.31915V8.59051C41.729 9.18974 41.8646 9.7268 42.136 10.2017C42.4186 10.6652 42.8087 11.027 43.3062 11.2871C43.8037 11.5471 44.3747 11.6772 45.0191 11.6772C45.5505 11.6772 46.031 11.5867 46.4607 11.4058C46.9016 11.2249 47.2861 10.9535 47.6139 10.5917L48.5128 11.6432C48.1058 12.1181 47.597 12.4799 46.9864 12.7286C46.3872 12.9774 45.7145 13.1018 44.9682 13.1018ZM4.40805 24L1.06701 15.0114H2.61033L5.57826 23.152H4.849L7.93564 15.0114H9.30937L12.3282 23.152H11.6159L14.6516 15.0114H16.1102L12.7522 24H11.1919L8.35963 16.5717H8.8345L5.96833 24H4.40805ZM21.3637 24.1018C20.4592 24.1018 19.6564 23.9039 18.9554 23.5082C18.2544 23.1124 17.7004 22.5697 17.2934 21.8801C16.8863 21.1791 16.6828 20.3876 16.6828 19.5057C16.6828 18.6125 16.8863 17.8211 17.2934 17.1314C17.7004 16.4417 18.2544 15.9046 18.9554 15.5202C19.6564 15.1245 20.4592 14.9266 21.3637 14.9266C22.2569 14.9266 23.054 15.1245 23.755 15.5202C24.4673 15.9046 25.0213 16.4417 25.417 17.1314C25.824 17.8097 26.0276 18.6012 26.0276 19.5057C26.0276 20.3989 25.824 21.1904 25.417 21.8801C25.0213 22.5697 24.4673 23.1124 23.755 23.5082C23.054 23.9039 22.2569 24.1018 21.3637 24.1018ZM21.3637 22.6772C21.9403 22.6772 22.4547 22.5471 22.907 22.2871C23.3706 22.027 23.7324 21.6596 23.9924 21.1847C24.2525 20.6985 24.3825 20.1389 24.3825 19.5057C24.3825 18.8612 24.2525 18.3072 23.9924 17.8437C23.7324 17.3688 23.3706 17.0013 22.907 16.7413C22.4547 16.4812 21.9403 16.3512 21.3637 16.3512C20.787 16.3512 20.2726 16.4812 19.8203 16.7413C19.3681 17.0013 19.0063 17.3688 18.7349 17.8437C18.4636 18.3072 18.3279 18.8612 18.3279 19.5057C18.3279 20.1389 18.4636 20.6985 18.7349 21.1847C19.0063 21.6596 19.3681 22.027 19.8203 22.2871C20.2726 22.5471 20.787 22.6772 21.3637 22.6772ZM28.2792 24V15.0114H29.8395V17.4536L29.6869 16.8431C29.9356 16.2212 30.3539 15.7463 30.9419 15.4184C31.5298 15.0906 32.2534 14.9266 33.1127 14.9266V16.5039C33.0449 16.4926 32.977 16.4869 32.9092 16.4869C32.8526 16.4869 32.7961 16.4869 32.7396 16.4869C31.869 16.4869 31.1793 16.7469 30.6705 17.267C30.1617 17.7871 29.9073 18.539 29.9073 19.5227V24H28.2792ZM36.4422 21.8292L36.4761 19.7431L41.6488 15.0114H43.6161L39.6476 18.9121L38.7657 19.6583L36.4422 21.8292ZM35.1194 24V11.416H36.7475V24H35.1194ZM41.988 24L38.4604 19.6244L39.5119 18.3185L43.9892 24H41.988ZM46.1257 24.1018C45.8092 24.1018 45.5378 23.9943 45.3117 23.7795C45.0856 23.5534 44.9725 23.2707 44.9725 22.9315C44.9725 22.5924 45.0856 22.3153 45.3117 22.1005C45.5378 21.8857 45.8092 21.7783 46.1257 21.7783C46.431 21.7783 46.6911 21.8857 46.9059 22.1005C47.132 22.3153 47.2451 22.5924 47.2451 22.9315C47.2451 23.2707 47.132 23.5534 46.9059 23.7795C46.6911 23.9943 46.431 24.1018 46.1257 24.1018Z" fill="white" />
              </svg>
            </span>
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="mb-2">
          <h1 className={styles.title}>Restaurar Contraseña</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Input LeftSection={false} LabelText='Nueva Contraseña' InputType='password' IconName='eye' IconColor='#fff' />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input LeftSection={false} LabelText='Confirmar Contraseña' InputType='password' IconName='eye' IconColor='#fff' />
        </Col>
      </Row>
      <Row>
        <Col className={styles.button}>
          <Button text={'Restablecer contraseña'} />
        </Col>
      </Row>
    </Container>
  )
}

export default Recovery
