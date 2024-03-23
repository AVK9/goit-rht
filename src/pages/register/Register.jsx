import { useState } from 'react';
import styles from './styles.module.scss';
import {
  AtSymbolIcon,
  KeyIcon,
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.box}>
      <div className={styles.parent}>
        <h1 className={styles.heading}>Registration User</h1>
        <div className={styles.inputBox}>
          <input
            className={styles.input}
            placeholder="John"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <UserIcon className={styles.inputIcn} />
        </div>
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
        <button className={styles.btnLogin}>Register</button>
        <div className={styles.linksBox}>
          <a className={styles.linksLogin} href="/login">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
