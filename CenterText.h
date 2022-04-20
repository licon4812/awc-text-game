#include <string>
#include <iostream>
#include <iomanip>

template<typename charT, typename traits = std::char_traits<charT> >
class CenterText {
    std::basic_string<charT, traits> str_;
public:
    CenterText(std::basic_string<charT, traits> str) : str_(str) {}
    template<typename a, typename b>
    friend std::basic_ostream<a, b>& operator<<(std::basic_ostream<a, b>& s, const CenterText<a, b>& c);
};

template<typename charT, typename traits = std::char_traits<charT> >
CenterText<charT, traits> centered(std::basic_string<charT, traits> str) {
    return CenterText<charT, traits>(str);
}

// redeclare for std::string directly so we can support anything that implicitly converts to std::string
CenterText<std::string::value_type, std::string::traits_type> centered(const std::string& str) {
    return CenterText<std::string::value_type, std::string::traits_type>(str);
}

template<typename charT, typename traits>
std::basic_ostream<charT, traits>& operator<<(std::basic_ostream<charT, traits>& s, const CenterText<charT, traits>& c) {
    std::streamsize w = s.width();
    if (w > c.str_.length()) {
        std::streamsize left = (w + c.str_.length()) / 2;
        s.width(left);
        s << c.str_;
        s.width(w - left);
        s << "";
    }
    else {
        s << c.str_;
    }
    return s;
}