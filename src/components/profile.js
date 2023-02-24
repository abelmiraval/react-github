import styled from 'styled-components'

const ProfileStyled = styled.div`
  grid-area: profile;

  .avatar{
    border-radius: 50%;
    border: 1px solid var(--grey-1);
    overflow: hidden;
    box-sizing: border-box;
    margin-block-end: 1.5rem;
  }

  .name{
    font: var(--headline1);
    color: var(--white);
    margin: 0;
    margin-block-end: .5rem;
  }

  .username{
    margin-block-start: .5rem;
    margin-block-end: 1.5rem;
    font: var(--headline2-ligth);
  }

  .info{
    color: var(--grey-1);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: .5rem;
    margin-block: 1rem;
    font: var(--body2-semi-bold);
  }

  a:hover{
    text-decoration: underline;
  }

  .buttons{
    display: flex;
    gap: .5rem;
    margin-block-end: 1.5rem;
  }

`

function Profile() {



  return (
    <ProfileStyled>
      <img src="" className='avatar' width="278" height="278" alt="" />
       <p className='name'>Abel Miraval</p>
      <p className='username'>abelmiraval</p>
      <div className='buttons'>
        <button>follow</button>
        <button>sponsors</button>
      </div>
      <p className="bio info">
        hola mundo!
      </p>
      <p className="follwers info">
      • 10 <span>followers</span> <span>•</span> 15 <span>following</span>
      </p>
      <p className='stars info'>
      • 81
      </p>
      <p className='location info'>
      • Peru
      </p>
      <a className='info' href='https://abelmiraval.com' target='_blank' rel='noreferrer'>
        https://abelmiraval.com
      </a>
      <a className='info' href="https://abelmiraval.com" target='_blank' rel='noreferrer'>
        @abelmiraval
      </a>


    </ProfileStyled>
  )
}

export default Profile
