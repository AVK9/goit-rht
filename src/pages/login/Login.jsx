import { useState } from 'react';
import styles from './styles.module.scss';
import {
  AtSymbolIcon,
  KeyIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/outline';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.box}>
      <div className={styles.parent}>
        <h1 className={styles.heading}>Login User</h1>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            placeholder="john@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <AtSymbolIcon className={styles.inputIcn} />
        </div>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            placeholder="password"
            type={!showPassword ? 'password' : 'text'}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <KeyIcon className={styles.inputIcn} />
          <div
            className={styles.eyeShow}
            onClick={() => setShowPassword(!showPassword)}
          ></div>
          {!showPassword && <EyeIcon className={styles.inputIcnRight} />}
          {showPassword && <EyeSlashIcon className={styles.inputIcnRight} />}
        </div>
        <button className={styles.btnLogin}>Login</button>
        <div className={styles.linksBox}>
          <a className={styles.linksLogin} href="/register">
            Do you want to register?
          </a>
        </div>
      </div>
    </div>
  );
}
