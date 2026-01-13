import '../../styles/LoginPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import LoginForm from './LoginForm';
import toast from 'react-hot-toast';

const LoginPage = () => {
    const signIn = useAuthStore((s) => s.signIn);
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [rememberId, setRememberId] = useState(false);

    const navigate = useNavigate()
    const handleSubmit = async () => {
        try {
            await signIn({ userName, passWord, rememberId });
            toast.success("로그인 되었습니다.")
            navigate('/')
        } catch {
            toast.error("로그인실패: 아이디/비밀번호 확인")
        }
    };
    return (
        <div className="container">
            <div className="contents">
                <section className="hero">
                    <h2 className="hero-title">
                        지금 로그인 하고 <br />
                        최적의 모니터링 환경을 <br />
                        경험하세요.
                    </h2>
                    <div className="hero-sub">Mobile Performance<br />Management Solution</div>
                </section>
                <section className='login'>
                    <LoginForm
                        userName={userName}
                        passWord={passWord}
                        rememberId={rememberId}
                        onChangeUserName={setUserName}
                        onChagePassWord={setPassWord}
                        onToggleRemeberId={() => setRememberId((prev) => !prev)}
                        onSubmit={handleSubmit}
                    >
                    </LoginForm>
                </section>
            </div>
        </div>
    )
}

export default LoginPage;