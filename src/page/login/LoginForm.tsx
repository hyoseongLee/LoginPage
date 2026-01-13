type Props = {
    userName: string;
    passWord: string;
    rememberId: boolean;
    onChangeUserName: (v: string) => void;
    onChagePassWord: (v: string) => void;
    onToggleRemeberId: () => void;
    onSubmit: () => void;
}

const LoginForm = ({
    userName,
    passWord,
    rememberId,
    onChangeUserName,
    onChagePassWord,
    onToggleRemeberId,
    onSubmit
}: Props) => {

    return (
        <form className="login-form" onSubmit={(e) => {
            e.preventDefault()
            onSubmit()
        }}>
            <div className="field">
                <h1 className="">I MQA</h1>
                <div>UserName</div>
                <input
                    id="userName"
                    type="text"
                    placeholder="아이디를 입력해주세요."
                    value={userName}
                    onChange={(e) => onChangeUserName(e.target.value)}>
                </input>
            </div>

            <div className="field">
                <div>PassWord</div>
                <input
                    id="passWord"
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    value={passWord}
                    onChange={(e) => onChagePassWord(e.target.value)}>
                </input>
            </div>

            <div className="check">
                <div>아이디 저장</div>
                <input
                    type="checkbox"
                    checked={rememberId}
                    onChange={onToggleRemeberId}>
                </input>
            </div>
                <button className="btn" type="submit">
                    Login
                </button>
        </form>
    )
}

export default LoginForm;