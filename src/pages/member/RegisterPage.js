import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Oauth2SignupPage.css';

const Oauth2SignupPage = () => {
  const [oauthUser, setOauthUser] = useState(null);
  const [nickname, setNickname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [consent, setConsent] = useState({
    personalInfoRequired: false,
    termsRequired: false,
    dataSharingOptional: false,
    adsOptional: false,
    marketingEmailsOptional: false,
    marketingSMSOptional: false,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchSessionUser = async () => {
      try {
        const res = await axios.get(
          'http://localhost:8080/oauth2/session-user',
          {
            withCredentials: true,
          }
        );
        console.log('세션 사용자 정보:', res.data.data); // 👈 여기!
        setOauthUser(res.data.data);
      } catch (err) {
        console.error(err);
        setError('OAuth 사용자 정보를 불러올 수 없습니다.');
      }
    };

    fetchSessionUser();
  }, []);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setConsent((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!nickname.trim()) {
      setError('닉네임을 입력해주세요.');
      return;
    }
    if (!birthday.trim()) {
      setError('생년월일을 입력해주세요.');
      return;
    }
    if (!consent.personalInfoRequired || !consent.termsRequired) {
      setError('필수 항목에 동의하셔야 가입이 가능합니다.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8080/oauth2',
        {
          email: oauthUser.email,
          socialId: oauthUser.providerId,
          username: oauthUser.userName,
          nickname,
          provider: oauthUser.provider,
          imageUrl: oauthUser.imageUrl,
          birthday,
          consent,
        },
        {
          withCredentials: true,
        }
      );

      setSuccess('회원가입이 완료되었습니다!');
      window.location.href = 'http://localhost:3000'; // ✅ 여기서 리다이렉트
      setError('');
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || '회원가입에 실패했습니다.');
    }
  };

  if (!oauthUser) return <div>로딩 중...</div>;

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      <h2>OAuth2 회원가입</h2>

      <div>
        <p>
          <strong>이메일:</strong> {oauthUser.email}
        </p>
        <p>
          <strong>이름:</strong> {oauthUser.userName}
        </p>
        <p>
          <strong>소셜:</strong> {oauthUser.provider}
        </p>
        <p>
          <strong>소셜Id:</strong> {oauthUser.providerId}
        </p>
        {oauthUser.imageUrl && oauthUser.imageUrl !== 'No mobile provided' && (
          <img src={oauthUser.imageUrl} alt='profile' width='80' />
        )}
      </div>

      <form onSubmit={handleSignup}>
        <div>
          <label>닉네임</label>
          <br />
          <input
            type='text'
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
            maxLength={20}
          />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <label>생년월일 (yyyy-mm-dd)</label>
          <br />
          <input
            type='date'
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <label>
            <input
              type='checkbox'
              name='personalInfoRequired'
              checked={consent.personalInfoRequired}
              onChange={handleCheckboxChange}
              required
            />{' '}
            (필수) 개인정보 수집 및 이용 동의
          </label>
          <br />
          <label>
            <input
              type='checkbox'
              name='termsRequired'
              checked={consent.termsRequired}
              onChange={handleCheckboxChange}
              required
            />{' '}
            (필수) 이용약관 동의
          </label>
          <br />
          <label>
            <input
              type='checkbox'
              name='dataSharingOptional'
              checked={consent.dataSharingOptional}
              onChange={handleCheckboxChange}
            />{' '}
            (선택) 제3자 정보 제공 동의
          </label>
          <br />
          <label>
            <input
              type='checkbox'
              name='adsOptional'
              checked={consent.adsOptional}
              onChange={handleCheckboxChange}
            />{' '}
            (선택) 광고 수신 동의
          </label>
          <br />
          <label>
            <input
              type='checkbox'
              name='marketingEmailsOptional'
              checked={consent.marketingEmailsOptional}
              onChange={handleCheckboxChange}
            />{' '}
            (선택) 이메일 마케팅 수신
          </label>
          <br />
          <label>
            <input
              type='checkbox'
              name='marketingSMSOptional'
              checked={consent.marketingSMSOptional}
              onChange={handleCheckboxChange}
            />{' '}
            (선택) 문자 마케팅 수신
          </label>
        </div>

        <button type='submit' style={{ marginTop: '1rem' }}>
          회원가입
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default Oauth2SignupPage;
