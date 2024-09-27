import React from "react";
import "./profile-card.scss";

const formatStat = (num) => {
	let text = "";

	if (num > 1000000) {
		text = (num / 1000000).toFixed(1) + "M";
	} else if (num > 1000) {
		text = (num / 1000).toFixed(1) + "K";
	} else {
		text = num;
	}

	return text;
};

export const ProfileCard = (props) => {
	const { avatar, name, location, followers, following, shots } = props;

	const imageURL = `/images/profile/${avatar}`;

	return (
		<div className="profile-card">
			<div className="header">
				<img src={imageURL} alt="" />
			</div>
			<div className="content">
				<img src={imageURL} alt="" className="avatar" />

				<h2>{name}</h2>
				<h4>{location}</h4>

				<ul className="stats">
					<li>
						<h3>{formatStat(shots)}</h3>
						<p>Shot{shots > 1 && "s"}</p>
					</li>
					<li>
						<h3>{formatStat(followers)}</h3>
						<p>Follower{followers > 1 && "s"}</p>
					</li>
					<li>
						<h3>{formatStat(following)}</h3>
						<p>Following</p>
					</li>
				</ul>
			</div>
		</div>
	);
};