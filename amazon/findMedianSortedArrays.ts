function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const kthMin: (k: number, p1: number, p2: number) => number = (k, p1, p2) => {
    if (p1 === nums1.length || p2 === nums2.length) {
      return p1 === nums1.length ? nums2[p2 + k - 1] : nums1[p1 + k - 1];
    }
    if (k === 1) {
      return Math.min(nums1[p1], nums2[p2]);
    }
    const halfK = Math.floor(k / 2) - 1;
    const q1 = Math.min(nums1.length - 1, p1 + halfK),
      q2 = Math.min(nums2.length - 1, p2 + halfK);
    if (nums1[q1] <= nums2[q2]) {
      k -= q1 + 1 - p1;
      p1 = q1 + 1;
    } else {
      k -= q2 + 1 - p2;
      p2 = q2 + 1;
    }
    return kthMin(k, p1, p2);
  };
  const len = nums1.length + nums2.length;
  return (
    (kthMin(Math.floor(len / 2) + 1, 0, 0) +
      kthMin(Math.floor((len - 1) / 2) + 1, 0, 0)) /
    2
  );
}
