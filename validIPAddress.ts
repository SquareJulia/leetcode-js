function validIPAddress(queryIP: string): string {
  const isIPV4 = () => {
    const segments = queryIP.split(".");
    if (segments.length != 4) {
      return false;
    }
    return segments.every(
      (segment) =>
        segment.match(/^(0|[1-9][0-9]*)$/) != null && Number(segment) <= 0xff
    );
  };
  const isIPV6 = () => {
    const isHex: (str: string) => boolean = (str) => {
      return str.match(/^[0-9a-fA-F]+$/) != null;
    };
    const segments = queryIP.split(":");
    return (
      segments.length == 8 &&
      segments.every(
        (segment) =>
          segment.length >= 1 && segment.length <= 4 && isHex(segment)
      )
    );
  };
  return isIPV4() ? "IPv4" : isIPV6() ? "IPv6" : "Neither";
}
