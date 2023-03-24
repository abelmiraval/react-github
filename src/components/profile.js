import styled from "styled-components";
import Button from "./button";
import Icon from "./icon";
// import props from "./profile-data";

const ProfileStyled = styled.div`
  grid-area: profile;

  .avatar {
      border-radius: 50%;
      border: 1px solid var(--grey-1);
      overflow: hidden;
      box-sizing: border-box;
      block-size: 5rem;
      inline-size: 5rem;
  }

  .description{
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  .name {
    font: var(--headline1);
    color: var(--white);
    margin: 0;
  }

  .username {
    margin: 0;
    font: var(--headline2-ligth);
  }

  .info {
    color: var(--grey-1);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-block: 1rem;
    font: var(--body2-semi-bold);
  }

  a:hover {
    text-decoration: underline;
  }

  .buttons {
    display: flex;
    gap: 0.5rem;
    margin-block-end: 1.5rem;
  }

  .profile{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "profile-avatar"
      "profile-info"
      "profile-action";
    gap: 1rem;
  }

  .profileAvatar{
    grid-area: profile-avatar;
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .profileAction{
    grid-area: profile-action;
    display: flex;
    gap: 1rem;
  }

  .profileInfo{
    grid-area: profile-info;
  }

  @media screen and (min-width: 768px) {
    .profile{
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows:  auto auto auto auto;
      grid-template-areas: "profile-avatar" "profile-action" "profile-info";
    }
    .avatar {
      block-size: 17.4rem;
      inline-size: 17.4rem;
      margin-block-end: 1.5rem;
    }

    .name {
      margin-block-end: 0.5rem;
    }

    .username {
      margin-block-start: 0.5rem;
      margin-block-end: 1.5rem;
    }

    .profileAvatar{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .count{
      display: none;
    }
  }
`;

function Profile(props) {
  const {
    name,
    twitter_username,
    blog,
    login,
    avatar_url,
    bio,
    followers,
    following,
    location,
  } = props;
  return (
    <ProfileStyled>
      <div className="profile">
        <div className="profileAvatar">
          <img
            src={avatar_url}
            className="avatar"
            width="278"
            height="278"
            alt=""
          />
          <div className="description">
            <p className="name">{name}</p>
            <p className="username">{login}</p>
          </div>
        </div>
        <div className="profileAction">
          <Button text="Follow" link="#" />
          <Button
            text="Sponsor"
            icon={<Icon name="heart" size={24} color="var(--pink)" />}
          />
        </div>
        <div className="profileInfo">
          <p className="bio info">{bio}</p>
          <p className="follwers info">
            <Icon name="user" size={24}/> {followers} <span>followers</span> <span>•</span> {following}{" "}
            <span>following</span>
          </p>
          <p className="location info"> <Icon name="location" size={24}/> {location}</p>
          <a className="info" href={blog} target="_blank" rel="noreferrer">
            <Icon name="link" size={24}/> {blog}
          </a>
          <a
            className="info"
            href={`https://twitter.com/${twitter_username}`}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="twitter" size={24}/>
            @{twitter_username}
          </a>
        </div>
      </div>
    </ProfileStyled>
  );
}

export default Profile;
