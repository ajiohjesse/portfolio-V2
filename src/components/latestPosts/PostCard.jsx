import Link from "next/link";
import styles from "./postCard.module.css";
import { FiCalendar, FiClock } from "react-icons/fi";
import { cl } from "@utils/classNames";
import moment from "moment/moment";
import stringValidator from "@utils/stringValidator";

const PostCard = ({ post }) => {
  return (
    <article className={cl(styles.card, "scale")}>
      <h3 className={styles.title}>{post.title}</h3>
      <div className={styles.metadata}>
        <div>
          <FiCalendar />
          <p>Published {moment(post.date).fromNow()}</p>
        </div>
        <div>
          <FiClock />
          <p>{post.readingTime.text}</p>
        </div>
      </div>
      <p className={styles.text}>
        {stringValidator.truncate(post.summary, 25)}
      </p>
      <Link href={`/blog/${post.slug}`} className={styles.link}>
        Read More
      </Link>
    </article>
  );
};

export default PostCard;
