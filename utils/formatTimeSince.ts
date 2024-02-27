export   const formatTimeSince = (dateString: string): string => {
  const lastPostDate = new Date(dateString) as Date;
  const currentDate = new Date() as Date;
  const difference =
    (currentDate.getTime() - lastPostDate.getTime()) / (1000 * 60);

  if (difference >= 1440) {
    return `${Math.floor(difference / 1440)}d`;
  } else if (difference >= 60) {
    return `${Math.floor(difference / 60)}h`;
  } else if (difference >= 1) {
    return `${Math.floor(difference)}min`;
  } else {
    return "just now";
  }
};