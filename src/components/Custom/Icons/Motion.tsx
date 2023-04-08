import * as React from 'react'
import { motion } from 'framer-motion'
import styles from './Motion.module.scss'
import { SvgIcon, SvgIconProps } from '@mui/material'

const icon = {
  hidden: {
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
  },
}

export function NexonIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 64 64" className={styles.item}>
      <motion.path
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 3, ease: 'easeInOut' },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
        d="M 31.015625 8 C 30.8445 7.997125 30.673031 8.0375469 30.519531 8.1230469 L 10.519531 19.123047 C 10.198531 19.299047 10 19.636 10 20 L 10 49 C 10 49.042 10.010625 49.082047 10.015625 49.123047 C 10.018625 49.150047 10.020391 49.175172 10.025391 49.201172 C 10.048391 49.311172 10.087531 49.416719 10.144531 49.511719 C 10.155531 49.530719 10.170594 49.545453 10.183594 49.564453 C 10.237594 49.642453 10.303906 49.710484 10.378906 49.771484 C 10.399906 49.788484 10.417453 49.806266 10.439453 49.822266 C 10.451453 49.830266 10.461609 49.843562 10.474609 49.851562 C 10.563609 49.906562 10.659812 49.941797 10.757812 49.966797 C 10.763813 49.968797 10.768391 49.972609 10.775391 49.974609 L 36.775391 55.974609 C 36.849391 55.990609 36.925 56 37 56 C 37.167 56 37.332469 55.958953 37.480469 55.876953 L 57.480469 44.876953 C 57.849469 44.674953 58.052281 44.261703 57.988281 43.845703 C 57.923281 43.429703 57.603406 43.100531 57.191406 43.019531 L 32 38.089844 L 32 9 C 32 8.646 31.813766 8.319625 31.509766 8.140625 C 31.357766 8.050625 31.18675 8.002875 31.015625 8 z M 35 8 C 34.447 8 34 8.447 34 9 C 34 9.553 34.447 10 35 10 L 37 10 C 37.553 10 38 9.553 38 9 C 38 8.447 37.553 8 37 8 L 35 8 z M 30 10.691406 L 30 37.697266 L 12 34.175781 L 12 20.591797 L 30 10.691406 z M 35 12 C 34.447 12 34 12.447 34 13 C 34 13.553 34.447 14 35 14 L 37 14 C 37.553 14 38 13.553 38 13 C 38 12.447 37.553 12 37 12 L 35 12 z M 35 16 C 34.447 16 34 16.447 34 17 C 34 17.553 34.447 18 35 18 L 37 18 C 37.553 18 38 17.553 38 17 C 38 16.447 37.553 16 37 16 L 35 16 z M 35 20 C 34.447 20 34 20.447 34 21 C 34 21.553 34.447 22 35 22 L 37 22 C 37.553 22 38 21.553 38 21 C 38 20.447 37.553 20 37 20 L 35 20 z M 35 24 C 34.447 24 34 24.447 34 25 C 34 25.553 34.447 26 35 26 L 37 26 C 37.553 26 38 25.553 38 25 C 38 24.447 37.553 24 37 24 L 35 24 z M 35 28 C 34.447 28 34 28.447 34 29 C 34 29.553 34.447 30 35 30 L 37 30 C 37.553 30 38 29.553 38 29 C 38 28.447 37.553 28 37 28 L 35 28 z M 35 32 C 34.447 32 34 32.447 34 33 C 34 33.553 34.447 34 35 34 L 37 34 C 37.553 34 38 33.553 38 33 C 38 32.447 37.553 32 37 32 L 35 32 z M 12 36.214844 L 28.052734 39.355469 L 12 47.382812 L 12 36.214844 z M 31.267578 39.984375 L 54.103516 44.451172 L 36.853516 53.939453 L 13.935547 48.650391 L 31.267578 39.984375 z"
      />
    </SvgIcon>
  )
}

export function SabbaticalIcon(props: SvgIconProps) {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
      strokeWidth: 2,
      fillOpacity: 0,
    },
    visible: {
      pathLength: 1,
      fill: 'rgba(255, 255, 255, 1)',
      strokeWidth: 5,
    },
  }
  return (
    <SvgIcon {...props} viewBox="-7 -10 210 297" className={styles.item}>
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: 'easeInOut' },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
          d="m84.805 121.71c0.03869-3.1588 0.02225-1.4177 0.0093-9.9013 12.884 0.046 7.1431 0.0216 10.684-7e-3 0.11669 3.4887-0.03421 6.7382-0.03421 10.14l-21.159 0.0111 0.03346-20.245 10.458 0.0221 10.73-0.0536-0.01654 10.042m-10.728-9.9686 0.03151 10.101-10.444-0.0261m38.542 56.58c-0.27971-0.68211-0.61467-0.99954-1.0552-1.7542-0.34185-0.47893 0.10243-0.0686 0.0455-0.0686-0.057-0.0145-0.20448 0.78313-0.58907 1.3927-0.39883 0.62406-0.9803 0.94083-1.1655 1.2311-0.29913 0.43539-1.3332 2.371-6.0622 6.5798-1.0826 0.95785-7.6177 6.967-10.839 8.9093-1.3247 1.2046-1.9725 1.9572-4.966-0.29482l-2.2147-2.4656 8.6302-8.5784 8.33-7.6176 0.31153-1.7741c0.18517-0.72565 0.76045-2.5942 1.1166-3.9729l0.4627-2.7704 0.10287 0.0106c-0.55551-0.78371-1.054-1.4658-1.1253-1.5384-0.057-0.0726-0.17093 0.13061-0.2564 0.43539-0.0712 0.31928-0.49854 1.9302-0.92586 3.6137-0.42732 1.669-0.89737 3.4976-1.0256 4.0346l-0.24215 0.98688-7.6775 7.7209c-4.2305 4.2523-7.8484 7.9967-8.0479 8.345-0.27064 0.46442-0.37034 0.84176-0.37034 1.4078 0 1.3207 0.37034 1.8432 2.4215 3.4686 2.4072 1.9012 2.6351 2.0463 3.6037 2.0463 1.0825 0 1.4956-0.26123 4.0168-2.5398 7.9481-7.1694 11.324-10.232 11.523-10.435 0.11396-0.13061 1.111-1.0159 2.1936-1.9738 1.2962-1.1465 2.1936-2.0899 2.6494-2.743 0.62674-0.89981 2.5403-2.2813 2.8346-3.4288 2.6842 5.5857-0.19886 14.025 1.8182 18.976 0.39883 0.81272 0.70866 0.87907 1.5918 1.0097 1.4428-0.90658 5.0491 0.12466 5.4359-0.0913 1.1965-0.71114 0.15564-1.035 0.73536-4.13 0.15668-1.7125 0.537-2.5576 0.537-2.7463-0.82452-0.63469-0.41382-0.82352-1.7998-0.82352l-0.18518 2.1479c-0.0997 1.1756-0.21366 2.5108-0.25639 2.9607l-0.0855 0.84175h-4.5154l-0.0142-0.98688c0-0.53699-0.0855-4.8038-0.18518-9.477l-0.18517-8.5046-0.34185-0.68211c-0.18518-0.37734-1.4956-2.3946-2.9058-4.4845-5.4127-8.0257-6.3386-9.4625-6.3386-9.8253 0-0.42088-0.0142-0.36283 3.9741-11.596 1.5811-4.4555 3.0625-8.403 3.3188-8.8384 0.89737-1.5239 2.7918-2.83 4.7575-3.309 1.9514-0.46441 4.786-0.0145 6.595 1.0594 2.4215 1.4368 3.6607 4.1943 3.1479 7.0098-0.18517 1.0014-0.8404 2.9026-1.0113 2.9026-0.057 0-0.82616-0.94335-1.6808-2.1044-0.86888-1.1465-1.7093-2.1624-1.8517-2.2495-0.65522-0.34831-1.6808-0.0145-1.9799 0.65308-0.37035 0.84176 0.52024 0.49717 2.5002 3.124 0.7122 0.95786 2.3745 2.8446 3.3858 4.2088 0.99708 1.3497 2.5885 4.137 3.7708 5.719 1.168 1.5674 1.2827 3.0722 1.3112 3.1738 0.14244 0.37734-0.19942 1.103-0.74069 1.6109-6.3889-1.3034-4.705 4.096-5.0566 5.8197l-2.6351 0.0726c-2.92 0.0871-3.1622 0.14513-3.9598 1.0885-0.25639 0.27575-0.49854 0.69663-0.55552 0.91432-0.0712 0.2177-0.11395 3.367-0.11395 6.9953 0 6.5599 0 6.6034 0.31337 7.213 14.066-0.70261 25.548 0.5611 25.625-0.17419l0.34186-0.74016-0.0427-6.6034c-0.0285-7.0823-0.0143-6.8646-0.79767-7.7209-0.74068-0.82724-1.0113-0.89981-3.8601-0.97237l-2.6351-0.0726-0.0285-2.177c-0.0142-1.2046-0.0285-2.3221-0.0427-2.5108 0-0.18867-0.18517-0.53698-0.41308-0.76919-0.38458-0.39185-0.49854-0.42087-1.4956-0.42087h-1.0683l0.0855-0.92884c0.12819-1.4223-0.11395-1.9157-2.4072-4.978-1.1253-1.5094-2.4642-3.309-2.977-4.0056l-0.94011-1.2772 0.62674-1.4803c0.34185-0.81273 0.79766-2.1334 0.99708-2.9171 0.32761-1.2771 0.3561-1.64 0.29912-3.1203-0.0712-1.669-0.47005-3.2799-1.0113-4.1362-0.11395-0.17415-0.29913-0.47893-0.44157-0.69662l-0.24214-0.37734 0.75493-0.24672c1.7805-0.59503 3.4328-2.0173 4.3017-3.6863 0.65522-1.2772 1.4956-3.4976 1.6523-4.3974 0.49854-2.6123-0.28488-5.2102-2.1224-7.0678-1.111-1.132-2.0226-1.6545-3.5183-2.0463-1.2535-0.3338-2.1793-0.34832-3.4186-0.0726-1.6666 0.36283-3.3616 1.4658-4.3729 2.83-0.61249 0.82724-1.4244 2.6123-2.0369 4.47-0.54128 1.6255-0.47006 3.904 0.17092 5.5875 0.057 0.15965-0.17092 0.23221-1.0398 0.30478-2.6066 0.24672-3.2327 1.5102-4.9847 2.9905-4.7431 5.3433-7.1658 14.006-9.6061 20.931-1.8046 6.5116 2.4723 8.9849 5.7507 13.816l2.0727 4.9666m-57.957-12.995-0.38433-0.0157c-0.91085-0.0374-1.5811-0.39185-1.9799-1.161-0.31337-0.58052-0.32761-0.79822-0.32761-3.2509 0-2.264 0.04273-2.7139 0.27064-3.2364 0.29912-0.6676 0.76918-1.0449 1.4814-1.1901l0.45581-0.10159 0.07122-3.7589c0.05698-3.309 0.09971-3.8459 0.34186-4.3249 0.37034-0.76919 1.5526-1.7996 2.3503-2.0463 11.649-0.36831 17.582-0.18647 32.134-0.15966l0.81191 0.40637c0.45581 0.2322 1.0398 0.68211 1.3247 1.0159 1.4798 3.4673 0.92586 4.8527 0.92586 8.911l0.54128 0.10159c0.54127 0.0871 1.111 0.56601 1.4386 1.2046-0.02511 1.9131-0.01396 4.976-0.1282 6.5454-0.39883 0.6676-1.0825 1.0449-1.8802 1.0449h-0.68372v0.8998c0 1.1756-0.32761 1.7706-1.111 2.0173-1.1253 0.3338-1.8802-0.50796-1.8802-2.1189v-0.79821h-30.625v1.0159c0 0.91432-0.04273 1.0594-0.41308 1.4803-0.34186 0.39185-0.51278 0.47893-1.0113 0.47893s-0.66947-0.0871-1.0113-0.47893c-0.37034-0.42087-0.50006-0.57016-0.41308-1.4803m56.971-31.463c0.2596-0.919 1.7271-1.0604 1.0946-1.689l-0.0223-12.176c-0.024-13.089-0.16406-12.545-0.36256-14.831-0.584-0.82724-0.82894 0.03395-1.7975-0.22728-0.61249-0.15849-4.9046 0.55677-29.157 0.2119-4.2989 0.65732-31.341-1.1658-29.517 0.27866 0.42732 1.0594-2.1081 0.97237 29.77 0.97237 17.933 0 28.83 0.0581 29.058 0.14513 0.82615 0.31929 0.79767-0.21769 0.79767 14.295 0 7.3 0.27163 13.564 0.057 13.279"
        />
    </SvgIcon>
  )
}

export function WargamingIcon(props: SvgIconProps) {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
      strokeWidth: 1,
      fillOpacity: 0,
    },
    visible: {
      pathLength: 1,
      fill: 'rgba(255, 255, 255, 1)',
      strokeWidth: 6,
    },
  }
  return (
    <SvgIcon {...props} viewBox="0 0 210 247" className={styles.item}>
      <motion.path
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 3, ease: 'easeInOut' },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
        d="m103.2 59.727c14.72-0.49303 29.59 3.9436 41.616 12.592 14.52 10.236 24.824 26.366 28.096 43.997 2.6586 12.759 1.1437 26.199-3.4504 38.313-6.0166 15.854-17.628 23.725-32.563 31.394-9.6534 4.9083-22.247 10.853-33.102 10.193-9.0463 0.52955-17.18-0.28824-25.497-3.8194-30.893-13.881-31.172-25.425-39.828-36.688m39.158 36.47c-27.968-14.206-42.428-54.302-37.192-77.037 3.852-16.833 12.472-33.841 26.592-43.483 10.619-7.3581 23.33-11.476 36.171-11.932m-0.37262-2.1078c15.348-0.50943 30.854 4.0748 43.394 13.011 15.141 10.577 25.884 27.243 29.296 45.46 2.7722 13.184 1.1926 27.071-3.5978 39.587-6.2736 16.381-18.753 30.224-34.326 38.149-10.066 5.0716-21.339 8.0824-32.657 7.4006-9.4327 0.54717-19.914 0.27212-28.587-3.3765-17.524-7.34-31.132-24.161-38.06-41.928m0.21946-0.182c-5.4318-13.641-6.5157-28.519-2.9836-42.796 4.0165-17.393 14.864-33.033 29.587-42.996 11.072-7.6028 24.327-11.857 37.716-12.329m-54.126 87.165c5.7065-12.809 13.788-27.488 24.769-36.537 10.529-8.3518 23.239-14.734 36.889-14.981-2.7644-3.3031-5.5436-6.5916-8.3816-9.8353 9.7895 2.7716 19.55 5.6556 29.244 8.7565-6.654 6.7042-13.292 13.431-20.222 19.843 0.22421-4.1276 0.53704-8.2623 0.64123-12.397-4.7762 0.83908-9.2237 3.1464-12.92 6.2624-8.0617 6.8392-12.808 16.786-15.759 26.787-3.04 10.277-4.306 21.1-3.7772 31.804 7.555-0.86833 14.879-3.4755 21.48-7.2354 8.055-4.5995 14.872-11.888 17.614-20.921-3.4722 0.56157-6.9146 1.3267-10.327 2.1719 5.5137-7.0406 11.153-13.984 16.653-21.04 4.731 7.8653 9.5662 15.677 13.709 23.88-3.6799-1.4308-7.1449-3.3703-10.9-4.5923 3.8517 15.446 3.0025 32.135-3.1294 46.868 16.481-5.7595 36.139-16.222 41.407-32.949 4.6939-14.629 5.1509-36.569-2.2026-50.089-6.2222-11.797-21.904-27.973-34.221-32.931-11.742-4.7642-31.853-4.7763-44.006-1.3006-15.028 4.3741-28.58 18.824-36.794 37.37-3.2778 11.179-5.9645 16.705-4.2423 27.864 0.3537 1.5061 3.0003 12.02 3.8806 13.724"
      />
    </SvgIcon>
  )
}

export function FreelanceIcon(props: SvgIconProps) {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
      strokeWidth: 8,
      fillOpacity: 0,
    },
    visible: {
      pathLength: 1,
      fill: 'rgba(255, 255, 255, 1)',
      strokeWidth: 25,
    },
  }
  return (
    <SvgIcon {...props} viewBox="-2 -20 210 297" className={styles.item}>
      <g transform="matrix(.035278 0 0 -.035278 87.534 143.16)">
      <motion.path
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 3, ease: 'easeInOut' },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
        d="m647 252c-21-23-22-66-1-86 38-38 112 1 99 52-12 51-66 69-98 34zm71-14c30-30 0-75-43-64-41 11-29 76 15 76 9 0 21-5 28-12zm-341 305c-33-5-26-23 9-23 15 0 24 6 24 15 0 8-1 14-2 14-2-1-15-4-31-6zm67 116c-3-6-1-16 5-22 8-8 11-5 11 11 0 24-5 28-16 11zm-144-9c0-11 5-20 10-20 6 0 10 9 10 20s-4 20-10 20c-5 0-10-9-10-20zm125 40c3-5 17-10 31-10 13 0 24 5 24 10 0 6-14 10-31 10s-28-4-24-10zm-140 0c3-5 15-10 25-10s22 5 25 10c4 6-7 10-25 10s-29-4-25-10zm-21 251c-64-29-87-70-95-171-4-47-10-97-14-113-8-31 8-57 35-57 11 0 23-16 35-45 9-26 32-58 51-73 24-19 34-35 34-54 0-28 0-28-69-28-51 0-74-4-89-17-27-24-142-249-142-278 0-13 5-36 12-50 24-54 35-55 448-55h380v34c0 19 22 96 50 172 27 76 50 142 50 146s-70 8-156 8c-141 0-158 2-181 20-20 16-41 20-94 20-69 0-69 0-69 28 0 20 8 32 29 45 18 10 41 40 57 72 18 38 32 55 45 55 28 0 44 41 28 71-8 15-12 50-10 89 3 86-26 144-89 177-57 30-184 32-246 4zm232-17c56-27 78-68 83-151 3-60 0-73-12-73-8 0-17 13-20 29s-17 41-30 56c-23 27-23 27-57 10-24-12-46-16-76-11-24 3-46 1-49-4-9-15-42-12-59 6-21 20-31 12-52-41-9-25-21-45-25-45-5 0-9 31-9 69 0 80 24 125 80 153 47 24 178 25 226 2zm19-174c21-41 20-165-3-210-24-49-85-82-141-77-46 5-83 27-115 70-23 32-33 132-19 187 9 33 12 35 48 32 20-2 45 0 54 4 9 3 36 6 61 5s52 3 60 9c25 16 39 11 55-20zm-305-101c0-24-4-30-17-27-22 4-30 38-11 49 22 15 28 10 28-22zm379 17c15-18 3-46-20-46-13 0-19 7-19 23 0 37 18 48 39 23zm-159-260c0-27-7-47-21-62l-21-23-29 21c-24 18-29 29-29 62v41h100zm-310-386c-48 0-90 35-90 75 0 33 114 261 137 274 10 6 37 11 59 11 37 0 42-3 48-27 3-16 28-47 56-72l50-43 55 47c39 33 55 54 55 71 0 22 4 24 49 24 59 0 78-17 25-22l-37-3-42-120-43-120-53 4c-33 2-57 9-62 17-6 10-28 14-73 14-64 0-64 0-58 25 4 15 2 25-5 25-6 0-13-11-17-25-5-19-13-25-34-25-16 0-32-5-35-10-4-6 32-10 99-10h106v-25c0-24-2-25-75-25h-75v-30c0-28-2-30-40-30m190 348c0-7 16-26 36-42l36-28 26 19c15 11 31 29 37 41 12 27 25 28 25 3 0-16-70-91-86-91-3 0-25 17-50 37-40 34-59 73-34 73 6 0 10-6 10-12zm571-158-46-130h-384l41 113c22 61 43 120 45 130 5 15 23 17 198 17h192zm-456-120c4-6-13-10-44-10-28 0-51 5-51 10 0 6 20 10 44 10 25 0 48-4 51-10zm3-53c3-15-8-17-122-17-120 0-126 1-126 20 0 20 5 20 122 18 108-3 123-5 126-21zm402 3c0-19-7-20-190-20s-190 1-190 20 7 20 190 20 190-1 190-20z"
      />
      </g>
    </SvgIcon>
  )
}

export function LeverIcon(props: SvgIconProps) {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
      strokeWidth: 10,
      strokeOpacity: '.98077',
    },
    visible: {
      pathLength: 1,
      fill: 'rgba(255, 255, 255, 1)',
      strokeWidth: 80,
    },
  }
  return (
    <SvgIcon {...props} viewBox="5 -25 210 297" className={styles.item}>
      <g transform="matrix(.035278 0 0 -.035278 15.445 218.33)">
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 0.3, ease: 'easeInOut' },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
          d='m856.43 2064.1 101.57 2.9332c124-9 321-9 390-1l52 7v157h-390v830h-150v-987'
        />
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 0.3, ease: 'easeInOut' },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            delay: 0.3,
          }}
          d='m1603.4 2385.4 197.64-5.3599h202l-6 98c-10 176-48 261-140 307-58 29-160 34-212 11-110-48-175-184-175-364 1-147 46-283 111-331 45-33 105-51 171-51 117 0 189 56 238 185l10 25h-80c-62 0-80-3-80-14 0-8-14-26-31-40-49-42-122-32-166 24-13 15-25 54-38 118l-7 32m196 279c31-14 66-86 66-134v-35h-249l5 33c14 77 26 107 51 126 29 23 87 28 127 10z'/>
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 0.3, ease: 'easeInOut' },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            delay: 0.6,
          }}
          d='m2273.8 2070h152.21l44 158c24 86 57 204 73 262s42 151 57 208l28 102h-147l-10-37c-5-21-33-143-62-270-29-128-56-233-60-233s-12 24-19 53c-7 28-22 97-35 152s-35 153-50 218l-27 117h-75c-66 0-74-2-69-17 3-10 21-74 40-143s58-208 87-310c28-102 56-202 61-222l10-38'/>
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 0.3, ease: 'easeInOut' },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            delay: 0.9,
          }}
          d='m2807.6 2379.7 211.41 0.3065h201v58c-1 251-85 372-260 371-36 0-79-6-96-13-137-60-204-268-160-499 34-177 124-254 286-245 57 3 77 9 112 34 43 30 82 87 98 144l9 30h-65c-63 0-66-1-103-40-31-33-45-40-75-40-78 0-124 51-141 158l-12.36 36.64m210.36 274.36c16-12 33-41 42-71 27-92 32-88-110-88-140 0-132-5-114 79 14 66 53 101 113 101 29 0 52-7 69-21z'/>
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 0.3, ease: 'easeInOut' },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            delay: 1.2,
          }}
          d='m3349.8 2070.9 54.174-0.8933h65l3 228c3 196 5 232 21 260 24 44 72 72 125 72h42v74c0 41-3 81-6 90-8 22-52 20-92-4-22-13-41-38-55-70-12-27-25-50-29-50-5 0-8 29-8 65v65h-130v-730'/>
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 0.3, ease: 'easeInOut' },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            delay: 1.5,
          }}
          d='m3710 2063c0-2 41-2 92-1l92 3 76 162c41 89 79 161 84 160 5-2 41-76 79-165l71-162h93c51 0 93 2 93 5 0 2-57 121-126 263l-125 258 121 237 122 237h-189l-68-160c-38-88-70-158-73-155s-36 74-73 157l-68 153-90 3c-50 1-91 0-91-4s52-114 116-244l116-238-126-252c-69-139-126-255-126-257'/>
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 0.3, ease: 'easeInOut' },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            delay: 1.8,
          }}
          d="m2760.8 2885.6 41.213 24.36c24 10 62 22 83 26 35 5 48 16 100 82 79 100 350 378 445 457 96 80 252 186 339 229 109 56 185 77 268 77 135 0 222-62 258-184 24-82 18-297-11-390-5-16 0-18 48-15l53 3 12 80c54 366-72 588-341 601-59 3-100-1-151-15-309-84-710-415-1093-903l-53-67"/>
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 0.3, ease: 'easeInOut' },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            delay: 2.1,
          }}
          d='m3782 1940h-127l-50-67c-98-131-294-350-406-455-139-130-197-177-317-257-272-183-491-218-608-96-63 65-79 123-79 280s18 257 84 454l47 141h-48c-48 0-49-1-68-45-28-66-55-157-84-285-78-350-21-580 169-678 66-34 199-42 295-17 315 81 730 424 1109 918 27.667 35.667 55.333 76.568 83 107'/>
      </g>
    </SvgIcon>
  )
}


